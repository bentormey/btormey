---
title: What can machine learning tell you about your weight?
date: 2019-09-29T11:55:28.376Z
thumb_img_path: /images/blur-codes-coding-577585.jpg
template: post
---
## Decision frameworks driven by data, not emotion

Introduction...

Importance of reducing emotional content.

Move bit on controlling impressions leading to emotions here?

\[Habit formation and impressions?]

Benefit of daily habit. It forms a strong habit and diminishes the impression of the weight...

### Take daily weight measurements, but filter out the noise

\[Common frustrations?]

The scale does weird things when you diet. You'll wake up looking like you've lost fat but the scale says you're stuck at the same weight as last week. It'll say that you're heavier even though you _know_ you've been doing everything right.

Here are some factors that affect your weight and have nothing to do with how well you stick to your diet:

1. When you last went to the bathroom.
2. How much food is in your digestive system.
3. The amount of sodium in your food.
4. How much water you drink.
5. The amount of carbohydrates you consume.

Your weight data is _noisy_ and you are looking for the _signal_.

On top of the noise there's observation error every time you take a measurement, even if you check the scale consistently at the same time of day and in the same state.

**Track your weight daily and you don't have to worry about this.**

That sounds counterintuitive, right?

Imagine your weight as a signal, varying continuously over time. Every time you step on the scale you're taking a sample, converting that continous signal into a discrete one.

In the same way that streaming music services compress audio by sampling it, you're compressing your weight data into a format that's more manageable.

If you don't take enough samples, you lose important information. A result from signal processing, Nyquist-Shannon theorem, suggests that you should use a sample rate greater than two measurements per week (a sample rate > 2/7) to attempt to reconstruct what's happening over the weekly timescale.

**Example.** Here are two curves showing weight gain in red and weight loss in green.

![](/images/untitled-design-3.png)

Both curves look the same if you sample at two points and try to extrapolate the trend line in black.

With **daily weight measurements** you have enough samples, all that's left to do is handle the noise.

You can filter out the noise by taking a **moving average** of your daily weight measurements. A simple type of moving average you can use is the arithmetic mean of your past weight measurements. I recommend using the last 7-14 days of weight data.

**Example.** W1 + W2 + ... + W14 = X 

Think of it sliding along your weight data, smoothing out all the bumps and dips.

Here's a comparison of daily weight measurement data in black plotted against the moving average in red.

![](/images/ma.png)

Notice how the measurement data moves up and down a lot but the moving average behaves much better?

...

A slightly more sophisticated method is to say that new measurements should contribute more than old measurements. You can weight each measurement such that you still get an average, but it's more sensitive to recent changes.

The method I use is called an exponential moving average. It gives you a better forecast of future weight measurements. And it gives you a clearer picture of the underlying behaviour of the weight measurements over time.

...

### What you did last week predicts your progress this week

The moving average has many applications, in finance it's often used to generate trading signals for stocks. It also helps to predict your future weight and support decision making.

The accuracy of your predictions can be improved using machine learning techniques like regression. Regression algorithms try to model a relationship between an independent variable (like time) and a dependent variable (like weight).

Here is the output of a model I fitted to real weight data using ridge regression with the scikitlearn library in Python, the predictions from the model are in green and the actual values are in blue.

![](/images/model.png)

Notice how closely the predicted values are to the actual values?

The model doesn't know _anything_ about calorie intake, macronutrients, or exercise. It only knows about the past week of weight data.

If you have enough weight data, you can predict your progress without micromanaging variables and introducing more complexity.

### Basic habits are the biggest factors in success

In addition to tracking weight data, you can track behaviours that influence your weight. The most popular way of doing this is to use an app to record your food intake and exercise.

Instead of zooming in on calories and grams of protein, you should look at your top-level behaviours:

* Did you plan and track your food today?
* Did you eat out?
* Did you stay up late and sacrifice your sleep?

You can log those behaviours daily with your weight data and use machine learning to understand the most important ones.

Here I applied the XGBoost algorithm on some anonymised client data to classify behaviours based on how they influence weight, ranking them by importance. Note that the ranking doesn't discriminate between weight gain or weight loss, it only cares about how strongly those behaviours predict change in weight.

![](/images/features.png)

You can see the most important features of the data selected by the algorithm were:

1. Eating out.
2. Tracking or not tracking macronutrients.
3. Introducing a more aggressive calorie deficit.

Intuitively it makes sense: eating out introduces a lot of variability in calorie intake, tracking consistently helps maintain a calorie deficit, and reducing calories significantly promotes weight loss.

It's important to remember that your data may lead to completely different conclusions. You need a _lot_ of data for this to work properly, don't expect meaningful results if you've only been tracking for a few weeks.

I recommend this approach over longer timescales, like 3-12 months, to inform behaviour change and support sustainable weight loss or weight maintenance, not to optimise short term weight loss.

## How to take action on this

Here are three things you can implement right now:

1. Sample your weight measurement _daily_ in the same state and at the same time.
2. Use a moving average to assess progress _not_ the raw data.
3. Be _consistent_ with strategic behaviours like tracking your food intake, planning your nutrition, and prioritising restful sleep.

You can grab a ready to use weight tracking spreadsheet and the Python code I used for the machine learning stuff [here](https://drive.google.com/open?id=1pTS0x-9m8XKafIuUMQi7fvN1gglt9jLY). Contact me if you want help setting it up.

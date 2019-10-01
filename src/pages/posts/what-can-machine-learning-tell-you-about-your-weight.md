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

### Take daily weight measurements, but filter out the noise

\[Common frustrations?]

The scale does weird things when you diet. You'll wake up looking leaner but the scale says you're stuck at the same weight as last week. It'll say that you're heavier even though you know you've been doing everything right.

Here are some factors that affect your weight and have nothing to do with how well you stick to your diet:

1. When you last went to the bathroom.
2. How much food is in your digestive system.
3. The amount of sodium in your food.
4. How much water you drink.
5. The amount of carbohydrates you consume.

Your weight data is _noisy_ and you are looking for the _signal_.

On top of the noise there's observation error every time you use your scale, even if you use it consistently at the same time of day and in the same state.

**Track your weight daily and you don't have to worry about this.**

That sounds counterintuitive, right?

Let's imagine your weight as a signal, varying continuously over time. Every time you step on the scale you're taking a sample, converting that continous signal into a discrete one.

In the same way that streaming music services compress audio by sampling it, you're compressing your weight data into a format that's more manageable.

If you don't take enough samples, you lose important information. The Nyquist-Shannon theorem suggests that we should use a sample rate greater than two measurements per week (a sample rate > 2/7) to attempt to reconstruct what's happening over the weekly timescale.

**Example.** Here are two curves showing weight gain in red and weight loss in green.

![](/images/untitled-design-3.png)

Both curves look the same if you sample at two points and try to extrapolate the trend line in black.

With **daily weight measurements** you have enough samples, all that's left to do is handle the noise.

You can filter out the noise by taking a **moving average** of your daily weight measurements. A simple type of moving average you can use is the arithmetic mean of your past weight measurements. I like to use the last 14 days of weight data.

**Example.** W1 + W2 + ... + W14 = X 

Think of it sliding along your weight data, smoothing out all the bumps and dips.

Here's a comparison of daily weight measurement data in black plotted against the moving average in red.

![](/images/ma.png)

Notice how the measurement data moves up and down a lot but the moving average behaves much better?

\[Habit formation and impressions?]

Benefit of daily habit. It forms a strong habit and diminishes the impression of the weight...

### What you did last week predicts your progress this week

The moving average helps you analyse the trend, but what if you want to make predictions?

You can use more advanced techniques to forecast future weight based on past weight data.

\[Regression]

Here's a regression model I fitted to real client data using the scikitlearn library in Python. Regression tries to find a linear relationship between 

![](/images/model.png)

Look how closely the predicted values are to the actual weight data.

The model doesn't know _anything_ about calorie intake, macronutrients, or exercise. It only knows about past weight.

What does that tell you?

**What you did last week forecasts...**

...

### Basic habits are the biggest factors in success

XGBoost machine learning algorithm...

Weight and behaviour tags in raw data.

Feature selection to tease out the most important factors influencing weight loss. It works by removing 

Classifying behaviours which influenced weight loss...

Important features

XGBoost

## How to take action on this

Do this...

1. Sample your weight measurement daily...
2. Use a moving average to assess progress _not_ the raw data.
3. Be _consistent_ in habits like tracking, planning your nutrition, and getting good sleep.

You can grab a ready to use weight tracking spreadsheet and the Python code I used for the machine learning stuff [here](https://drive.google.com/open?id=1pTS0x-9m8XKafIuUMQi7fvN1gglt9jLY). Contact me if you want help setting it up.

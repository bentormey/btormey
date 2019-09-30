---
title: What can machine learning tell you about your weight?
date: 2019-09-29T11:55:28.376Z
thumb_img_path: /images/blur-codes-coding-577585.jpg
template: post
---
## Decision frameworks backed by data

Introduction...

### Take daily weight measurements, but filter out the noise

If you've ever dieted before, you'll know that the scale does weird things. You'll wake up looking leaner but the scale says you haven't lost any weight. Or you're suddenly heavier even though you've been doing everything right.

Your weight data is _noisy_ and you need the _signal_.

Here are some common factors affecting your weight:

1. When you last went to the bathroom.
2. How much food is in your digestive system.
3. The amount of sodium in your food.
4. How much water you drink.
5. The amount of carbohydrate you consume.

**Track your weight daily and you don't have to worry about any of them.**

That sounds counterintuitive, right?

Let's imagine your weight is a signal, varying continuously over time. Every time you step on the scale you're taking a sample, converting that continous signal into a discrete one.

In the same way that streaming music services compress audio by sampling it, you're compressing your weight data.

If you don't take enough samples, you lose important information. The Nyquist-Shannon theorem suggests that we should use a sample rate greater than two measurements per week (a sample rate >  2/7) to attempt to reconstruct what's happening over the weekly timescale.

Look what happens when you only take two measurements.

![](/images/untitled-design.png)

There's observation error too, which happens even if you consistently take your measurements on the same scale at the same time.

That's why I recommend taking daily weight measurements.

There are two key benefits:

1. Forms a strong habit and diminishes the emotional impression of the scale.
2. Allows you to smooth out the noise and see a clear trend.

Habit and emotions...

Smoothing with a moving average... MA(14)

Here's a comparison of daily weight measurement data in black compared with a moving average in red.

![](/images/ma.png)

Do you notice how the measurement data moves up and down a lot but the moving average trends down consistently?

### What you did last week predicts your progress this week

Time series analysis is often used in finance to generate trading signals based on historical trading data.

You can use time series analysis techniques to understand your weight data too. The moving average is a simple way to analyse the trend, but it's not as reliable forecasting.

What happens when we use more advanced techniques to forecast future weight based on past weight data?

Here's a regression model I fitted to real client data using the past week of weight measurements to predict future weight.

![](/images/model.png)

Look how closely the predicted values are to the actual weight data.

The model has no knowledge of calorie intake or macronutrients, but it still seems to understand what's happening.

What does that mean?

**Your past weight is a strong predictor of future weight.**

...

You can do this yourself using the scikit-learn library in Python.

```
ridge = RidgeCV(cv=tscv)
ridge.fit(X_train_scaled, y_train)
```

### Basic habits are the biggest factors in success

Feature extraction

Key habits predict success

## How to take action on this

1. Sample your weight measurement at the same time every day.
2. Use a moving average to assess progress _not_ the raw data.
3. Be _consistent_ in habits like tracking, planning your nutrition, and getting good sleep.

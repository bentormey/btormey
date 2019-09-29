---
title: What can machine learning tell you about your weight?
date: 2019-09-29T11:55:28.376Z
thumb_img_path: /images/blur-codes-coding-577585.jpg
template: post
---
## An experiment with data

Introduction

### Ignore daily weight measurements, look at the trend

Your weight data is noisy.

If you've ever dieted before, you'll know that the scale does weird things. You'll wake up looking leaner and the scale says you haven't lost any weight.

Here are some common factors affecting your weight:

1. When you last went to the bathroom
2. How much food is in your digestive system
3. The amount of sodium in your food
4. How much water you drink
5. The amount of carbohydrate you consume

**Here's why you should track weight daily.**

Let's imagine your weight is a signal, varying continuously over time. Every time you step on the scale you're taking a sample, converting a continous signal into a discrete one.

In the same way that streaming music services compress audio by sampling it, you're compressing your continous weight data.

If you don't take enough samples, you lose important information. And because bodyweight measurements introduce error, you aren't getting accurate data if you only take one measurement per week.

The Nyquist-Shannon theorem tells us that we need a sample rate of at least two measurements per week (a sample rate of 2/7) to reconstruct the weekly weight variation.

But that's not 

Habit forming.

### What you did last week predicts your progress this week

Model fitting

![](/images/model.png)

```
# Import raw CSV from Google Sheets client data
df = pd.read_csv('raw.csv', parse_dates=['Date'])
# Drop missing entries
df_no_missing = df.dropna()
# Creating a copy of the initial datagrame to make various transformations
data = pd.DataFrame(df.Weight.copy())
data.columns = ["Weight"]
```

### Basic habits correlate with progress

Feature extraction

## How to take action

1. Sample your weight measurement _at least_ twice per week
2. Use the moving average to guage progress _not_ the raw weight data
3. Consistency with habits like tracking, planning your nutrition, and getting good sleep correlate with success

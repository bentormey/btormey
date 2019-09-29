---
title: What can machine learning tell you about your weight?
date: 2019-09-29T11:55:28.376Z
thumb_img_path: /images/blur-codes-coding-577585.jpg
template: post
---
## An experiment with data

Introduction

### Ignore daily weight measurements, look at the trend

If you've ever dieted before, you'll know that the scale does weird things. You'll wake up looking leaner and the scale says you haven't lost any weight.

Your weight data is _noisy_.

Here are some common factors affecting your weight:

1. When you last went to the bathroom
2. How much food is in your digestive system
3. The amount of sodium in your food
4. How much water you drink
5. The amount of carbohydrate you consume

__Track your weight daily and you don't have to worry about any of that.__

That sounds counterintuitive, right?

Let's imagine your weight is a signal, varying continuously over time. Every time you step on the scale you're taking a sample, converting a continous signal into a discrete one.

In the same way that streaming music services compress audio by sampling it, you're compressing your continous weight data.

If you don't take enough samples, you lose important information. And because bodyweight measurements introduce error, you aren't getting accurate data if you only take one measurement per week.

The Nyquist-Shannon theorem suggest that we should use a sample rate greater than two measurements per week (a sample rate >  2/7) to reconstruct weekly weight variation.

But that's not 

Habit forming.

### What you did last week predicts your progress this week

Model fitting

![](/images/model.png)


You can do ridge regression using the scikit-learn library in Python.

```
# Import raw CSV from Google Sheets
df = pd.read_csv('raw.csv', parse_dates=['Date'])

# Drop any missing entries (interpolation also works)
df_no_missing = df.dropna()

data = pd.DataFrame(df.Weight.copy())
data.columns = ["Weight"]

# Add the lags for the weight variable
for i in range(1, 7):
    data["lag_{}".format(i)] = data.Weight.shift(i)

y = data.dropna().Weight
X = data.dropna().drop(['Weight'], axis=1)

# Reserve 30% of data for testing
X_train, X_test, y_train, y_test = timeseries_train_test_split(X, y, test_size=0.3)

scaler = StandardScaler()

X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

ridge = RidgeCV(cv=tscv)
ridge.fit(X_train_scaled, y_train)
```

### Basic habits correlate with progress

Feature extraction

## How to take action

1. Sample your weight measurement _at least_ twice per week.
2. Use the moving average to guage progress _not_ the raw weight data.
3. Be _consistent_ in habits like tracking, planning your nutrition, and getting good sleep.

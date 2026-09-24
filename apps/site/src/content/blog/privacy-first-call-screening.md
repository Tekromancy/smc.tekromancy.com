---
title: "Why We Built a 100% On-Device, Zero-Tracker Call Manager"
description: "How Silent Mode Control leverages Android 10+ CallScreeningService to protect your peace of mind without uploading your contacts or call history to the cloud."
pubDate: 2026-09-20
tags: ["Privacy", "Security", "Architecture"]
author: "Tekromancy Team"
featured: false
---

# Why We Built a 100% On-Device, Zero-Tracker Call Manager

When looking at third-party caller ID and call screening apps on mobile platforms, a troubling pattern emerges: many apps require users to upload their entire address book to remote company servers. Contact numbers, family relationships, and personal call habits are aggregated, monetized, or shared with third-party advertising brokers.

At Tekromancy, we firmly rejected that architecture.

---

## The Power of Android Telecom `CallScreeningService`

Introduced in modern Android versions, `CallScreeningService` allows designated applications to act as a system screening component:

- When an incoming call arrives, the Android Telecom framework passes metadata directly into the app's `onScreenCall(details)` callback.
- The app evaluates whether to silence, vibrate, reject, or allow the call.
- The decision is returned to the OS, which executes the action before the user's phone even rings.

Because this happens directly within the Android OS telecom stack, **there is zero need to continuously read the system Call Log, listen to raw phone state broadcasts, or transmit phone numbers across the internet**.

---

## Our Zero-Cloud Privacy Commitment

1. **No External Servers:** Silent Mode Control does not run backend databases or servers that receive user data.
2. **Local Room SQLite Storage:** All groups, contact rules, and historical audit records reside exclusively in encrypted local app storage.
3. **No Third-Party Analytics or Ad SDKs:** We do not include Firebase Analytics, Crashlytics, AdMob, or tracking pixels.
4. **On-Demand Data Purge:** Users can delete all screening logs with a single tap in the app.

We believe that software should serve the person holding the phone—nobody else.

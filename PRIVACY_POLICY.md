# Privacy Policy for Silent Mode Control & Silent Mode Control Pro

**Effective Date:** September 24, 2026  
**Last Updated:** September 24, 2026  
**Developer:** Tekromancy  
**Applications Covered:**
- **Silent Mode Control** (Package: `com.tekromancy.silentmodecontrol`)
- **Silent Mode Control Pro** (Package: `com.tekromancy.silentmodecontrolpro`)


---

## 1. Introduction & Core Philosophy
Tekromancy ("we", "us", or "our") develops **Silent Mode Control** and **Silent Mode Control Pro** with a fundamental **privacy-first, on-device architecture**.

We believe your phone calls, contact list, and personal schedules are strictly private. Both versions of Silent Mode Control are designed to function **without external web servers, without cloud databases, and without remote telemetry or tracking services**. All data processed by the application remains on your physical device.

---

## 2. Permissions & Data Access

Silent Mode Control requests and utilizes only the minimum system capabilities required to provide call scheduling and screening functionality:

| System Capability / Permission | Purpose | Where Data Is Handled |
| :--- | :--- | :--- |
| **Android Call Screening Role (`RoleManager.ROLE_CALL_SCREENING`)** | Enables the Android Telecom system to pass incoming calls to the app's `CallScreeningService` so the app can instruct the OS whether to silence, vibrate, allow, or block the call based on your active schedules. | Evaluated purely in memory in real time. Never shared. |
| **`android.permission.VIBRATE`** | Allows the app to trigger auxiliary vibration patterns for contacts configured with "Vibrate Only" or "Ring & Vibrate" modes. | Device hardware only. |
| **`android.permission.POST_NOTIFICATIONS`** *(Optional, Android 13+)* | Permits optional non-intrusive system notifications regarding screened calls or service status. | Device notification tray only. |

> [!NOTE]
> **No Sensitive Call Log or Device Contacts Permissions Requested:**  
> In strict accordance with Google Play's Permission Minimization and Sensitive Data Policies, Silent Mode Control **does NOT** request broad `READ_CALL_LOG`, `READ_PHONE_STATE`, or `READ_CONTACTS` permissions. The app operates exclusively via the official Android Telecom Call Screening API.

---

## 3. How Data Is Handled, Stored, and Shared

### A. Local Contact & Group Schedules
- When you define customized rules for phone numbers or groups (e.g., family, work, emergency), this information is stored locally in an encrypted Room SQLite database on your device's private application storage.
- This data is never synchronized with any remote server or cloud account.

### B. Screened Call History
- When an incoming call is screened, the application records a timestamp, incoming phone number, resolution rule, and the resulting action (e.g. Silenced, Vibrated, Allowed, Blocked) to your local on-device audit history.
- This audit log is stored locally only to provide you with visibility into call screening decisions.

### C. Zero Mobile App Telemetry & Third-Party Sharing
- **No Remote Servers:** We do not operate remote servers that collect, store, or process user phone calls or contacts.
- **No Mobile Analytics SDKs:** Neither mobile application contains Google Firebase, Crashlytics, Mixpanel, or invasive tracker SDKs.
- **Website Analytics & Advertising:** The public website (`https://smc.tekromancy.com`) may use standard Google Analytics (GA4) and Google AdSense/AdMob to measure site traffic and display advertising. You may freely use ad-blockers or privacy extensions when visiting the website.
- **No Data Selling:** We do not sell, rent, license, or disclose user data to data brokers, advertisers, or third parties under any circumstances.

---

## 4. User Control & Data Deletion (Google Play Compliance)

You have full, permanent control over all data stored within the app:

1. **In-App History Erasure:**  
   You can delete all call screening history logs at any time by navigating to:  
   **Dashboard > Info Icon (About & Privacy) > Clear Screened Call History**, or via the History screen.
2. **Deleting Rules & Numbers:**  
   Individual phone numbers, groups, and schedules can be modified or permanently removed at any time from the Contacts or Groups screens.
3. **Complete Device Deletion:**  
   Because all application data is stored in the local Android app sandbox:
   - Go to Android **Settings > Apps > Silent Mode Control > Storage & Cache > Clear Data / Storage**.
   - Or simply uninstall the application. All local databases, preferences, and cached files are immediately and permanently erased by the operating system.

---

## 5. Children's Privacy
Silent Mode Control is intended for general audiences (aged 18 and older). We do not knowingly collect, process, or solicit personal data from children under the age of 13 (or under 16 in certain jurisdictions), in full compliance with the Children’s Online Privacy Protection Act (COPPA) and Google Play Families Policy.

---

## 6. Security
We protect your data by keeping it local to your device. The application relies on the security sandbox enforced by the Android Operating System, preventing other non-privileged applications from accessing Silent Mode Control's internal SQLite database or settings.

---

## 7. Policy Changes
We may update our Privacy Policy periodically to reflect changes in legal requirements or platform updates. Any updates will be accompanied by an updated "Effective Date" at the top of this document and will be reflected within the in-app Privacy Policy dialog.

---

## 8. Contact Us
If you have any questions, feedback, or concerns regarding this Privacy Policy or our on-device data practices, please contact us:

- **Developer:** Tekromancy
- **Email:** support@tekromancy.com
- **Website:** https://tekromancy.com

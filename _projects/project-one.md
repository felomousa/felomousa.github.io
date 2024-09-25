---
title: "complianceScheduler"
overview: "i developed a secure workflow management system to automate and simplify manual scheduling of medication compliance packs in pharmacies. the application enhances efficiency and prioritizes security by implementing user authentication, transaction logging, scheduling, and data tracking. <br><br>this solution eliminated scheduling errors, significantly reducing last-minute rushes to prepare compliance packs in-house, and minimized mistakes caused by time shortages."
layout: project
---

### *features*

#### user authentication
- <span style="color:#E74C3C;">passwordless login</span> using <span style="color:#E74C3C;">two-factor authentication (2FA)</span> with <span style="color:#E74C3C;">QR codes</span> and <span style="color:#E74C3C;">one-time passwords (OTP)</span>.
- <span style="color:#E74C3C;">admin approval</span> for new user registrations.
- integrated <span style="color:#E74C3C;">recaptcha</span> to prevent bots.

#### transaction management
- <span style="color:#F39C12;">logs and tracks transactions</span> with automatic calculations for key dates.
- determines <span style="color:#F39C12;">workflow status</span> as overdue, due, or early.
- allows <span style="color:#F39C12;">updating transaction statuses</span> and adding notes.

#### scheduling
- configurable <span style="color:#F39C12;">processing cut-off days</span> and receive dates.
- <span style="color:#F39C12;">automated date calculations</span> to reduce errors.

#### qr code integration
- generates <span style="color:#2ECC71;">printable cards with qr codes</span> for quick scanning.
- supports <span style="color:#F39C12;">batch processing</span> for efficiency.

#### data filtering
- create and assign <span style="color:#F39C12;">custom tags</span> to entries.
- <span style="color:#F39C12;">filter data</span> based on tags.

#### history tracking
- provides <span style="color:#F39C12;">detailed transaction history</span> for traceability.

## technologies used

#### frontend
- <span style="color:#2ECC71;">react.js</span> and <span style="color:#2ECC71;">react bootstrap</span> for the user interface.
- <span style="color:#2ECC71;">qr code generation libraries</span>.

#### backend
- <span style="color:#F39C12;">flask (python)</span> for server-side logic.
- <span style="color:#F39C12;">sqlite</span> for the database.

#### security
- <span style="color:#E74C3C;">reCaptcha</span> and <span style="color:#E74C3C;">2FA</span> for authentication.
- <span style="color:#E74C3C;">SSL certificates</span> for encrypted communication.
- <span style="color:#E74C3C;">cloudflare</span> for network protection.

#### deployment
- hosted on a <span style="color:#9B59B6;">raspberry pi</span> running <span style="color:#9B59B6;">linux</span> and <span style="color:#9B59B6;">nginx</span>.


<br>

**note**: *the repository for this project is private.*
import nodemailer from "nodemailer";
import { CONFIG } from "../../config/global.config.js";
import { getHumanReadableDateTime } from "./date_calculator.js";

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: CONFIG["USER"],
    pass: CONFIG["APP_PASSWORD"],
  },
});

export function send_notification(status_code, trns_count) {
  var mailOptions = {
    from: "jerenr18@gmail.com",
    to: "rahuldarekar369782@gmail.com",
    subject: "J-FINANCE Transactions processing status", // add dynamically
    html: `<!DOCTYPE html>
           <html>
             <head>
               <style>
                 .success { color: green; font-weight: bold; }
                 .failure { color: red; font-weight: bold; }
                 .message { font-family: poppins, sans-serif; font-size: 14px; }
               </style>
             </head>
             <body>
               <p class="message">
                 ${
                   status_code > 200
                     ? `<span class="failure">Failed : </span> Transactions processing failed on ${getHumanReadableDateTime()}`
                     : `<span class="success">Success : </span> <b>${trns_count}</b> Transactions are processed successfully on ${getHumanReadableDateTime()}`
                 }
               </p>
             </body>
           </html>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error("Error sending email:", error);
      return { success: false };
    } else {
      return { success: true };
    }
  });
}

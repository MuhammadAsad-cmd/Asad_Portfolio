// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Retrieve email credentials from environment variables
    const emailUser = process.env.EMAIL_ADDRESS;
    const emailPass = process.env.EMAIL_PASSWORD;

    console.log('Email user:', emailUser);
    console.log('Email pass:', emailPass);

    // Create Nodemailer transporter
    let transporter =  nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });

    // Setup email data
    let mailOptions = {
      from: `"Your Name" <${emailUser}>`, // Sender's name and address
      to: emailUser, // Recipient's email address
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
      // Send email
      const info = await transporter.sendMail(mailOptions, function (error) {
        if(error) {
          console.log('Email sent error:', info.response);
        } else {
          console.log('Email sent: success', info.response);
        }
      });
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error: Unable to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

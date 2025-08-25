const http = require("http");

const myServer = http.createServer((req, res) => {
  console.log(req.url);

  switch (req.url) {
    case "/":
      res.end(`home page`);
      break;
    case "/about":
      res.end(`about page`);
      break;
    case "/contact":
      res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - My Website</title>
</head>
<body>
    <header>
        <h1>Contact Us</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you. Send us a message using the form below or use our contact information.</p>
            
            <article>
                <h3>Contact Form</h3>
                <form>
                    <fieldset>
                        <legend>Personal Information</legend>
                        
                        <p>
                            <label for="name">Full Name:</label>
                            <input type="text" id="name" name="name" required>
                        </p>
                        
                        <p>
                            <label for="email">Email Address:</label>
                            <input type="email" id="email" name="email" required>
                        </p>
                        
                        <p>
                            <label for="phone">Phone Number:</label>
                            <input type="tel" id="phone" name="phone">
                        </p>
                    </fieldset>
                    
                    <fieldset>
                        <legend>Message Details</legend>
                        
                        <p>
                            <label for="subject">Subject:</label>
                            <select id="subject" name="subject">
                                <option value="">Please select...</option>
                                <option value="general">General Inquiry</option>
                                <option value="support">Technical Support</option>
                                <option value="business">Business Partnership</option>
                                <option value="feedback">Feedback</option>
                            </select>
                        </p>
                        
                        <p>
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" rows="6" cols="50" required></textarea>
                        </p>
                        
                        <p>
                            <input type="checkbox" id="newsletter" name="newsletter">
                            <label for="newsletter">Subscribe to our newsletter</label>
                        </p>
                    </fieldset>
                    
                    <p>
                        <button type="submit">Send Message</button>
                        <button type="reset">Reset Form</button>
                    </p>
                </form>
            </article>

            <article>
                <h3>Other Ways to Reach Us</h3>
                <address>
                    <p><strong>Office Address:</strong><br>
                    123 Main Street<br>
                    Suite 456<br>
                    City, State 12345</p>
                    
                    <p><strong>Phone:</strong> <a href="tel:+1234567890">(123) 456-7890</a></p>
                    <p><strong>Email:</strong> <a href="mailto:info@example.com">info@example.com</a></p>
                    <p><strong>Fax:</strong> (123) 456-7891</p>
                </address>
                
                <h4>Business Hours</h4>
                <table border="1">
                    <caption>Our office hours throughout the week</caption>
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Hours</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Monday - Friday</td>
                            <td>9:00 AM - 6:00 PM</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>10:00 AM - 4:00 PM</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>Closed</td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 My Website. All rights reserved.</p>
    </footer>
</body>
</html>`);
      break;
  }
});

myServer.listen(8001, () => {
  console.log("Server Started");
});

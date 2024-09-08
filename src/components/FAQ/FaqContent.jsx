import React from "react";
import AboutReports from "./FaqContents/AboutReports";
import FilingReports from "./FaqContents/FilingReports";
import AfterReports from "./FaqContents/AfterReports";
import GettingMoneyBack from "./FaqContents/GettingMoneyBack";
import Scams from "./FaqContents/Scams";
import WhatYouCanDo from "./FaqContents/WhatYouCanDo";

export default function FaqContent() {
  const aboutMyReport = [
    {
      question: "What can I report?",
      answer:
        "Report anything you think may be a fraud, scam, or bad business practice. For ideas of what you might report to the BD Blacklist, check out Blacklist Guide for more information and advice Visit our partners,shoes – leaders in fashionable footwear!",
    },
    {
      question:
        "I'm not sure if it's a scam or fraud — should I still report it?",
      answer:
        "Yes, please report it. Whether you think it’s a scam, you know it is, or you’re not happy about a business practice, tell the BD Blacklist. BD Blacklist and Bangladesh Cybersecurity Organization co-operates with law enforcement partners to enforce a variety of laws. Your report makes a difference and can help law enforcers spot problems.",
    },
    {
      question: "I'm not sure what category to choose — what should I do?",
      answer:
        "We've listed some of the common things people report, but there are many other issues you can report to the BD Blacklist. But if you're not sure which category to choose or don't see a category that fits your situation, just choose 'Other Issues' and we'll get it to the right place. If you think your report fits in more than one category, just choose the one you think is the best fit.",
    },
    {
      question: "Can I just report the number of an unwanted call?",
      answer:
        "Yes! When filing your report, choose the category 'Fraud Caller.' You can use the streamlined form to report an unwanted call like an illegal robocall. We'll ask you some extra questions that could help the law enforcers solve cases, but you can choose how much information you give.",
    },
    {
      question: "Can I report spam texts and emails here?",
      answer:
        "Yes! Look for the category your spam email or text would fit into. If you don't find one, choose 'Something Else.' Please paste the message into the Comments field of your report — but be sure not to click on any links in the email or text.",
    },
    {
      question: "Where should I report identity theft?",
      answer:
        "You can report identity theft and get a recovery plan from BD Blacklist Helpline.",
    },
    {
      question:
        "If I already filed a report at Bangladesh Cyber Crime Unit, should I also file a report here?",
      answer:
        "No, you don't need to report identity theft again at BD Blacklist but you can to help others.",
    },
    {
      question:
        "Should I still report something to the BD Blacklist If I already reported it to another agency?",
      answer:
        "Yes, it's a good idea to report it to BD Blacklist too. One exception: if you reported a financial issue to the High Court or Supreme Court, you don't need to report it again here.",
    },
    {
      question: "Can I report the company I work for?",
      answer:
        "Yes. If you prefer, you can file a report anonymously. How much information you give is up to you, but filling in your contact information can help if the Law Enforcers need more information from you. We will not automatically share your information with the company. Your anonymity is secured and not disclosed.",
    },
    {
      question: "Can I file a report if I don't live in Bangladesh?",
      answer:
        "If you live outside Bangladesh or want to report an international scam, you can use report. It will be sent to our partner Law Enforcement agencies and to International Platforms where we are partnered with more than 35 consumer protection agencies around the world and helps identify trends and prevent international scams.",
    },
    {
      question: "Can I file a report for someone else?",
      answer:
        "Yes. You'll be able to say if you're reporting on behalf of someone else. You'll also be able to give us your information and that of the person you’re reporting for, if you choose to share it.",
    },
  ];

  const filingReport = [
    {
      question: "What do I need to file a report?",
      answer:
        "Anything you can tell us about your experience is helpful. Please share as much or as little information as you'd like. Please send your screenshots and any other evidence you have. If you paid any money, we'll ask how much, and when you paid. We'll also ask for any information you might have about whoever you're reporting — like their name and any contact information you have.",
    },
    {
      question: "Can I attach or send you documents related to my report?",
      answer:
        "Please attach all relevant documents, screenshots, authentic pictures of the documents and product photo. Hold onto your documents because our investigation team and the law enforcement might ask you for them in connection with an investigation.",
    },
    {
      question: "Can I get help filing my report?",
      answer:
        "If you’re having technical issues or difficulty choosing a category, use the Live Chat button for help with the process. But you won’t be able to file your report through the Live Chat.",
    },
    {
      question: "Why was I sent to the Bangladesh Police to file my report?",
      answer:
        "The Law Enforcers of Bangladesh (CID, DMP, NSI) handles issues related to high level crime and they might be able to help you resolve your issue. If your report falls into one of those national crime categories, we'll send you to the relevant Law Enforcers.. But don't worry — your report will still end up in the BD Blacklist Database, which makes reports available to local law enforcement across Bangladesh.",
    },
    {
      question: "Can I file a report in another language?",
      answer:
        "Please report the issue in Bangla or English. We do not support any other languages",
    },
    {
      question: "What does BD Blacklist do with my personal information?",
      answer:
        "Protecting the privacy and security of consumers' personal information is very important to us. Learn more about what the BD Blacklist does with the information you give us at our privacy policy. Giving us your contact information can help if we need more information, but how much information you share is up to you.",
    },
    {
      question: "Can I file my report anonymously?",
      answer:
        "Yes, you can file a report anonymously. You also can give as much or as little information as you want. It’s helpful to have contact information in case the BD Blacklist needs to learn more about your experience",
    },
  ];

  const afterReport = [
    {
      question: "What happens to my report?",
      answer:
        "Your report goes into the BD Blacklist Database, which is available to local law enforcement across the country (DMP, CID, SSF and NSI) BD Blacklist uses reports like yours to investigate and bring cases against fraud, scams, and bad business practices, but can’t resolve reports on behalf of individuals. But we will share your report with the local law enforcement across the country (DMP, CID, SSF and NSI) BD Blacklist also uses reports to spot trends, educate the public, and share data about what is happening in your community.",
    },
    {
      question: "Will I hear back from the BD Blacklist?",
      answer:
        "BD Blacklist is not able to respond to each report individually, and it can't take action on behalf of individual consumers. BD Blacklist uses reports like yours to investigate and bring cases against fraud, scams, and bad business practices. When you submit your report, we'll offer you next steps you can take to protect yourself or recover from fraud. If you include your email address in your report, we'll also send you an email with these steps.",
    },
    {
      question: "Will the BD Blacklist call me?",
      answer:
        "Typically, no. If the BD Blacklist ever does call you about a report you filed, the person calling will have the reference number you were given for your report when you submitted it. If anyone calls for any other reason, saying they're from the BD Blacklist, that's probably a scammer. We've heard reports of fake BD Blacklist callers, sometimes claiming to have refunds or prize winnings, and asking people to pay a fee to get them. That's a scam. BD Blacklist will never ask you to send money for any reason. If you believe you received a call from a BD Blacklist employee, call our hotline mentioned in our website portal to cross check.",
    },
    {
      question: "Can I find out what's happened with my report?",
      answer:
        "BD Blacklist isn't able to give updates on reports that have been filed or respond to each report individually.",
    },
    {
      question: "Can I get a copy of my report or report number?",
      answer:
        "When you submit your report, you will have the chance to print or save it. The report will include your report number. If you leave the page without printing or saving, you won't be able to get a copy of your report.",
    },
    {
      question: "How do I update or modify my report?",
      answer:
        "The quickest way to update your report is to click the report and signin using your account information. If you're not sure you have your report number, check your email. If you gave us your address, we would have sent it to you when you filed your initial report.",
    },
    {
      question: "Should I file a report with anyone else?",
      answer:
        "Your report goes into BD Blacklist database which is available to local law enforcement across the country. You must also file a report with your local law enforcement office as well.",
    },
    {
      question: "Will unwanted calls stop if I report them?",
      answer:
        "Reporting unwanted calls won't instantly stop them. But reporting does matter. BD Blacklist analyzes report data and trends to identify illegal callers based on calling patterns. BD Blacklist takes the phone numbers you report and releases them to the public each business day. This helps phone carriers and others working on call-blocking and call-labeling solutions. Your reports also help law enforcement identify the people behind illegal calls. To get fewer illegal robocalls, look into call-blocking and call-labeling solutions. The call-blocking option you choose will depend on whether you’re getting calls on a cell phone, traditional landline, or home phone that uses the internet (VoIP).",
    },
    {
      question:
        "Will you share my information with the company I'm reporting to?",
      answer:
        "We will not automatically share your information with the company, but there are times when we may share it — for example, if a judge orders us to share it. If you prefer, submit your report anonymously. How much information you give is up to you, but filling in your contact information can help if the BD Blacklist needs more information from you.",
    },
  ];

  const gettingMoneyBack = [
    {
      question: "How do I get my money back?",
      answer:
        "After you file your report, we will give you steps to take that could help as you try to get your money back or stop a charge, depending on how you paid. The quicker you act, the better your chance of getting your money back.",
    },
    {
      question: "What can I do if I paid a scammer with a gift card?",
      answer:
        "If you bought a gift card and gave a scammer the numbers: - Contact the company that issued the gift card right away. Tell them the card was used in a scam and ask for your money back. - Try to find your receipt from when you bought the gift card and the card itself. It could help you recover your money from the gift card company.",
    },
    {
      question: "What can I do if I paid a scammer with a wire transfer?",
      answer:
        "If you paid a scammer with a Bank transfer: - Contact the bank or company that did the wire transfer right away. If you used a money transfer company, call them immediately to file a fraud complaint. Call the complaint department of your respective Bank. - Ask for the Bank transfer to be reversed. It’s unlikely to happen, but it’s important to ask.",
    },
    {
      question:
        "What can I do if I paid a scammer with a credit or debit card?",
      answer:
        "If you paid a scammer with a credit or debit card: - File a dispute (also called a “chargeback”) with your credit or debit card company. • Online: Log onto your credit or debit card company’s website and go through the dispute process. • By Phone: Call the phone number on the back of your card and tell them why you’re filing a dispute. - Follow up with a letter to your credit or debit card company. To protect any rights you may have, follow up in writing by sending a letter to the address listed for billing disputes or errors. - Save your records. Keep any letters, notes, or emails related to the scam — they could help prove you’re entitled to a refund if the credit or debit card company has any questions.",
    },
    {
      question: "How do I dispute an electronic bank transfer?",
      answer:
        "If you paid with an electronic bank transfer or withdrawal: - Contact your bank immediately. Ask if the bank can stop the transaction or recover your money from the person’s or company’s account. Tell the bank the reason you want to stop the transfer, and give them the bank account number your money was sent to. Don’t wait. Let your bank know as soon as you can. - If the bank won't help you, file a complaint to Bangladesh Bank.",
    },
    {
      question: "How do I stop a payment that I mailed?",
      answer:
        "If you sent cash by Post office: - Contact the Bangladesh Postal Service office to stop the transfer. - Otherwise, contact whatever delivery service you use as soon as possible.",
    },
    {
      question: "How do I stop a money order?",
      answer:
        "To stop payment on a money order. Contact the company that issued the money order right away. See if you can stop payment.",
    },
    {
      question:
        "What can I do if I didn't get a product or service I paid for?",
      answer:
        "Try contacting the seller first to resolve the problem and get a refund. Most legitimate businesses want to keep you happy so you’ll keep coming back. If that doesn't work, you can use these tips to try to reverse the charge or get your money back, depending on how you paid: • Credit or debit card • Electronic bank transfer or withdrawal • Wire transfer",
    },
    {
      question:
        "What do I do if I gave someone personal information like my Social Security number or passwords?",
      answer:
        "If you think a scammer has your information, like your National Identity Card (NID), credit card, or bank account number: - Go to BD Blacklist Look for specific steps to take based on the information that was stolen. If you gave your username and password to a scammer. Change your password right away. - If you use the same password for other accounts or sites, change it there, too. Create a new password that is strong. If someone calls and offers to 'help' you recover money you have already lost. Don’t give them money or personal information. You're probably dealing with a fake refund scam.",
    },
    {
      question: "What to do if I paid a scammer with Cryptocurrency?",
      answer:
        "If you paid a scammer with cryptocurrency: While it is very difficult to get your money back when you pay using cryptocurrency, you can try to contact the company you used to send the money and tell them it was a fraudulent transaction. Ask to have the transaction reversed, if possible.",
    },
  ];

  const scams = [
    {
      question: "How can I find out if something is a scam?",
      answer:
        "Here are some ways you can tell you're dealing with a scam:- Scammers usually pressure you to act quickly. They don't want you to have time to check what they're saying.- Scammers tell you to pay in a specific way. They want it to be hard to get your money back, so they'll say to pay by gift card, by wire transfer, or with cryptocurrency.- Scammers ask for your personal or financial information — things like your National Identity Card (NID), credit card, or bank account number.- Before you act, type the company or product name into your favorite search engine with terms like “review,” “complaint,” or “scam,” and see what you find.",
    },
    {
      question: "How do I know if a call is from a scammer?",
      answer:
        "Scammers who call you have a few things in common:- They'll ask for money or information (like your National Identity Card (NID), credit card, or bank account number)- They'll tell you how to pay — often by Bkash, cryptocurrency, or Bank transfer.- And remember: caller ID can be faked. So even if it looks like the call comes from a government agency, bank number, Bkash helpline for example, or looks like it comes from a local number, it could be a scammer calling from anywhere in the world.",
    },
    {
      question:
        "How can I find out if a company I want to do business with is legitimate?",
      answer:
        "If you're thinking about dealing with a company you don't know, do some research first. Anyone can put up a website under almost any name. So before you buy, invest, or otherwise deal with a company, confirm their physical address and phone number in case you have questions or problems later. Then type the company's name into your favorite search engine with terms like “review,” “complaint,” or “scam” to see what people have to say about them. Finally, learn the signs of a scam at BD Cybersecurity Organization",
    },
    {
      question:
        "I received a check or claim form from the BD Blacklist — is it real?",
      answer:
        "A check or claim form sent as part of an BD Blacklist will include an explanation and details about the case. If someone tells you to send money to get a refund from the BD Blacklist or any other government agency, it’s a scam.",
    },
    {
      question: "Did the BD Blacklist call me?",
      answer:
        "If BD Blacklist ever does call you about a report you filed as part of a possible investigation, the person calling will have the reference number you were given for your report when you submitted it. If anyone calls for any other reason, saying they're from the BD Blacklist, that's probably a scammer. We've heard reports of fake BD Blacklist callers, sometimes claiming to have refunds or prize winnings, and asking you to pay a fee to get them. That's a scam. BD Blacklist will never ask you to send money for any reason. If you believe you received a call from a BD Blacklist, call the BD Blacklist Hotline.",
    },
    {
      question: "How can I avoid a cryptocurrency scam?",
      answer:
        "Scammers are always finding new ways to steal your money using cryptocurrency. One sure sign of a scam is anyone who says you have to pay by cryptocurrency. In fact, anyone who tells you to pay by Bank transfer, Bkash, or cryptocurrency is a scammer. Of course, if you pay, there's almost no way to get that money back. Which is what the scammers are counting on. Common cryptocurrency scams include investment and business opportunity scams, blackmail emails, and social media scams.",
    },
    {
      question: "How can I avoid an E-Commerce impersonator scam?",
      answer:
        "Scammers are calling people and using the name of a company everyone knows to rip people off. If you get an unexpected call or message about a problem with any of your accounts, hang up.- Do not speak with scammer customer support- Do not call a phone number they gave you- Do not give out your personal information- If you think there may actually be a problem with one of your accounts, contact the company using a phone number or website you know is real.- If you believe you are dealing with a scammer, you can use our online form to file a report about your issue if you haven't already.",
    },
    {
      question: "How can I avoid a government impersonator scam?",
      answer:
        "You’ve gotten the calls: from the Bangladesh Government or any number of other agencies. Except: as soon as the caller threatens you or demands that you pay them with a Bkash or by Bank Transfer money, you know. It’s a scam. Even if caller ID tells you otherwise – that’s not the government calling. So how do you spot it and stop it? Here’s what to know:- Scammers call, email, or text you for money or information. But the government won’t. Anyone who calls, emails, or texts, asking for money or personal information and claims to be from the government is a scammer. Hang up and don’t respond to messages.- Scammers tell you how to pay — usually by wiring money, cryptocurrency, or Bkash. Nobody legit will ever tell you to pay in any of those ways. If they call, hang up the phone. If they email, text, or message you, don’t click on any links. It’s a scam.- Even if your caller ID says it’s from the government, it could be a scam. Caller ID can be faked.- If you believe you are dealing with a scammer, you can use our online form to file a report about your issue if you haven't already.",
    },
    {
      question: "How can I avoid a fake check scam?",
      answer:
        "If someone you don’t know sends you a check and asks for money back, that’s a scam. Fake checks come in many forms. They might look like business or personal checks, cashier’s checks, money orders, or electronic checks. Here’s what you need to know about fake check scams. In a fake check scam, a person you don’t know asks you to deposit a check — sometimes for several thousand takas and usually for more than you are owed — and send some of the money back, to them or another person. The scammers always have a good story to explain the overpayment. They might say they’re stuck out of the country, they need you to cover taxes or fees, you’ll need to buy supplies, or something else. If you believe you are dealing with a scammer, you can use our online form to file a report about your issue if you haven't already.",
    },
    {
      question: "How can I avoid a phishing scam?",
      answer:
        "Scammers use email or text messages to trick you into giving them your personal information. They may try to steal your passwords, account numbers, or National Identity Card numbers. If they get that information, they could gain access to your email, bank, or other accounts. Scammers launch thousands of phishing attacks like these every day — and they’re often successful. Scammers often update their tactics, but there are some signs that will help you recognize a phishing email or text message. Phishing emails and text messages may look like they’re from a company you know or trust. They may look like they’re from a bank, a credit card company, a social networking site, an online payment website or app, or an online store. Phishing emails and text messages often tell a story to trick you into clicking on a link or opening an attachment. They may 1-'say they’ve noticed some suspicious activity or log-in attempts' ,2'- claim there’s a problem with your account or your payment information',3'- say you must confirm some personal information',4'- want you to click on a link to make a payment',5'- say you’re eligible to register for a government refund offer a coupon for free stuff .If you believe you are dealing with a scammer, you can use our online form to file a report about your issue if you haven't already.",
    },
    {
      question: "How can I avoid a robocall scam?",
      answer:
        "It’s cheap and easy for scammers and telemarketers to make robocalls over the internet from anywhere in the world. If someone is already breaking the law by robocalling you without permission, there’s a good chance it’s a scam. At the very least, it’s a company you don’t want to do business with. Don’t rely on your caller ID. Scammers can fake the name and number that shows up, making it look like a call is from a government agency like Medicare or a local number. That’s called spoofing. You can watch out for common phone scams like government impersonator scams . If someone calls you out of the blue and asks you to hand over personal information or wire money or pay with a BKash , it’s a scam. If you believe you are dealing with a scammer, you can use our online form to file a report about your issue if you haven't already.",
    },
    {
      question: "How can I avoid a spam text message scam?",
      answer:
        "Scammers send fake text messages to trick you into giving them your personal information – things like your password, account number, or National Identity number. If they get that information, they could gain access to your email, bank, or other accounts. Or they could sell your information to other scammers. The scammers use a variety of ever-changing stories to try to rope you in. They may- promise free prizes, gift cards or coupons- offer you a low or no interest credit card- promise to help you pay off your personal loansScammers also send fake messages that say they have some information about your account or a transaction. The scammers may• say they’ve noticed some suspicious activity on your account• claim there's a problem with your payment information• send you a fake invoice and tell you to contact them if you didn’t authorize the purchase• send you a fake package delivery notificationIf you believe you are dealing with a scammer, you can use our online form to file a report about your issue if you haven't already.",
    },
  ];

  const whatYouCanDo = [
    {
      question:
        "Where can I learn more about scams and my rights as a consumer?",
      answer:
        "Go to BD Blacklist. You'll find articles, blog posts, videos, and infographics on a range of consumer topics.",
    },
    {
      question: "What should I do if I lost money to a scam?",
      answer:
        "Once you send money to a scammer, it's often gone. But it is sometimes possible to get your money back:- If you paid with a credit or debit card, try disputing the charge right away.- If you paid with a gift card, contact the gift card company right away.- If you paid with a Bank transfer, immediately contact Western Union, MoneyGram, or whatever company you used.- If you mailed cash or a money order, try to stop the delivery. You can also try to stop payment on a money order.- If you paid with an electronic bank transfer or withdrawal, contact your bank immediately.For more tips on what to do, visit www.bdblacklist.com",
    },
    {
      question:
        "Where can I find information on a specific BD Blacklist rule or act?",
      answer:
        "BD Blacklist enforces Bangladeshi consumer protection laws that prevent fraud, deception, and unfair business practices.",
    },
    {
      question: "What can I do about robocalls and other annoying calls?",
      answer:
        "To get fewer illegal robocalls, look into call-blocking and call-labeling solutions. The call-blocking option you choose will depend on whether you’re getting calls on a cell phone, traditional landline, or home phone that uses the internet (VoIP). BD Blacklist analyzes complaint data and trends to identify illegal callers based on calling patterns. BD Blacklist takes the phone numbers you report and releases them to the public each business day. This helps phone carriers and others that are working on call-blocking solutions. Your reports also help law enforcement identify the people behind illegal calls. If you're getting a lot of robocalls, they're probably scams.",
    },
    {
      question:
        "What do I do if I think my computer has malware because of a tech support scam?",
      answer:
        "If you gave a scammer remote access to your computer:- Update your computer’s security software.- Run a scan and delete anything it identifies as a problem.- If you shared any passwords, change them right away. If you use the same password for other accounts or sites, change it there, too. Create new passwords that are strong.- If you think there’s a problem with your computer, find a computer technician you can trust. Try finding someone at your computer manufacturer’s website or a store that sells computer equipment and offers technical support in person.",
    },
    {
      question:
        "How can I tell if a check is real or part of a fake check scam?",
      answer:
        "In a fake check scam, a person you don’t know asks you to deposit a check and send some of the money to another person. If you deposit the fake check, the check might 'clear' and the funds might become available. You might think it's safe to send the money — but it's not. By law, banks have to make deposited funds available quickly, usually within two days. But that doesn’t mean it’s a good check. Fake checks can take weeks to be discovered and untangled. By that time, the scammer has any money you sent, and you’re stuck paying the money back to the bank. Since it's not always easy to tell whether a check is fake, don’t rely on money from a check unless you know and trust the person you’re dealing with.",
    },
    {
      question: "Do you have advice for business owners?",
      answer:
        "Yes, at BD Blacklist you will have access to consumer protection law information. You'll find guidance for business and legal resources, including advice for small business.",
    },
    {
      question: "How can I share this website with people I know?",
      answer:
        "You'll find graphics and videos you can share on social media or add to your website at BD Blacklist. Thank you for helping to fight fraud in your community by telling others about BD Blacklist",
    },
  ];
  return (
    <div>
      <AboutReports aboutMyReport={aboutMyReport} />
      <FilingReports filingReport={filingReport} />
      <AfterReports afterReport={afterReport} />
      <GettingMoneyBack gettingMoneyBack={gettingMoneyBack} />
      <Scams scams={scams} />
      <WhatYouCanDo whatYouCanDo={whatYouCanDo} />
    </div>
  );
}

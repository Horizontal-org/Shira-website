---
id: questions
slug: /questions
sidebar_position: 4
description: ru-Learn how to create and customize quiz questions in Shira — including preferences, apps, content, and explanations — to teach learners how to identify phishing attempts.

---

# ru-Questions

Quiz questions are where the learning happens in Shira. This is where you show your learners an email or message, and ask them: does this look like phishing? 

Each question is made up of several components:
* [The question’s preferences](#preferences) 
* [An app](#app)
* [The question's content](#content)
* [Variables](#variables)
* [Explanations](#explanations)

:::info
The amount of questions you can add to your quizzes depends on your [Shira plan](/pricing).
:::

## ru-Creating a question {#create}
You can create questions from scratch -configuring each of the questions components- or you can pull ready-made questions from the Library. Questions on the library has been created by security trainers and have been used in trainings worldwide. If you pull a question from the Library, we recommend you to edit the content and explanations to adapt it to your specific context and learners needs.

## ru-Question preferences {#preferences}
When you create a question, you must: 
- Name the question: this name, like "Invitation to conference" or "Suspicious login notification", is meant to help you recognize the questions you create. A question's name is only visible to space admins and learners never see it when they take a quiz. 
- Tell Shira whether the email or message you're creating is *phishing* or *legitimate*. This will allow Shira to determine whether a user's response is correct. 

## ru-An app {#app}
An *app* is an interface that looks exactly like the actual app or platform your learner uses every day: Gmail, Outlook, SMS, WhatsApp, etc. 

With apps, Shira shows an email or message exactly how it would be in real life. This means that when they face a real-life phishing attack, learners will be more likely to know where to look for clues that it is phishing. 

Currently, Shira supports the following apps:
- Gmail
- Outlook
- SMS
- WhatsApp
- Facebook Messenger
- Dating App

:::note
[Let us know](/contact) if your team relies on apps that aren't in this list and that you would like to see in Shira!
:::  

## ru-The question's content {#content}
A question's content is the actual email or message that you draft to display in the quiz question. 

This can include any elements that are usually part of emails or messages in real life: text, images, file attachments, links, etc. 

## ru-Explanations {#explanations}
Explanations are short snippets of text that you can create to explain to learners why the email or message in the question may be a phishing attack or not.

Explanations will be displayed after a learner answers a question, and highlight specific elements in the question. 

When you create a question, each explanation must be linked to an element in the question, such as:
- The sender's name
- The sender's email address or phone number
- Specific words, sentences, or images inside an email or message
- Images or file attachments

The order of explanations that you see when you create the quiz question is the same order that the explanations will be shown to learners when they take the quiz.

## ru-Variables {#variables}
Variables are placeholders that you can use to insert personalized information into a question.

The information shown is relevant to each learner. For public quizzes, it's based on what they entered or auto-generated during quiz setup. For private quizze, it's the name and email that was configured when inviting the Learner.

To add a variable, type the following:

```
{{name}}
This will display the learner's name

{{email}}
This will display the learner's email address
```


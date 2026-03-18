---
id: questions
slug: /questions
sidebar_position: 3
description: Learn how to create and customize quiz questions in Shira — including preferences, apps, content, and explanations — to teach learners how to identify phishing attempts.

---

# الأسئلة

أسئلة الاختبار هي المكان الذي يتحقق فيه التعلم الفعلي في Shira. حيث تعرض على
متدربيك رسالة بريد إلكتروني أو نصاً قصيراً وتطرح عليهم السؤال : هل يبدو هذا
تصيداً احتيالياً؟

يتكون كل سؤال من عدة عناصر:
* [تفضيلات السؤال](#preferences)
* [تطبيق](#app)
* [محتوى السؤال](#content)
* [المتغيرات](#variables)
* [التوضيحات](#explanations)

## إنشاء سؤال {#create}
لإنشاء أسئلة وإضافتها إلى الاختبار، هناك خياران اثنان:
1. يمكن إنشاء أسئلة من الصفر وتهيئة كل جزء من مكونات الأسئلة بأنفسكم.
2. يمكن سحب أسئلة جاهزة من المكتبة. إذا أخذتم سؤالا من المكتبة، يمكن استخدامه
   كما هو أو تكييفه حسب السياق وعند الحاجة.

## تفضيلات الأسئلة {#preferences}
عند إنشاء سؤال، يجب:
- تسمية السؤال: ذلك الاسم، مثل 'دعوة للمؤتمر' أو 'إشعار دخول مشبوه'، يساعد على
  التعرف على الأسئلة التي يجري إنشاؤها. يظهر اسم السؤال فقط لمسؤولي الفضاء؛ لا
  يرى المتعلمون ذلك أبدا عند إجراء الاختبار.
- وجب إخبار Shira أن البريد الإلكتروني أو الرسالة التي جرى إنشاؤها تُمثِّل
  *تصيدا احتياليا* أو هي *مشروعة*. إذ يسمح ذلك لـ Shira بتحديد صحة جواب
  المستخدم.

## تطبيق {#app}
التطبيق واجهة تبدو تماماً مثل التطبيق أو المنصة الفعلية التي يستخدمها المتعلمون
كل يوم: Gmail، أو Outlook، أو الرسائل النصية، أو WhatsApp، وغيرها.

من خلال التطبيقات، يعرض Shira رسائل البريد الإلكتروني أو الرسائل النصية تماماً
كما تظهر في الواقع. وهذا يعني أنه عندما يواجه المتعلمون هجوماً حقيقياً للتصيد
الاحتيالي، سيكونون أكثر قدرة على معرفة الأماكن التي يجب البحث فيها عن الدلائل
التي تكشف هذا الاحتيال.

يدعم Shira حالياً التطبيقات التالية :
- Gmail
- Outlook
- الرسائل النصية
- WhatsApp
- Facebook Messenger
- تطبيقات المواعدة

:::note [أخبرونا](/contact) إذا كانت فرقكم تعتمد على تطبيقات ليست مدرجة في هذه
القائمة، وترغبون في رؤيتها ضمن Shira! :::

## محتوى السؤال {#content}
محتوى السؤال هو نص البريد الإلكتروني أو الرسالة الفعلية التي تقومون بصياغتها
لتظهر ضمن سؤال الاختبار.

يمكن أن يشمل ذلك أي عناصر تكون عادةً جزءاً من رسائل البريد الإلكتروني أو الرسائل
في الحياة الواقعية: النصوص، الصور، ملفات المرفقات، الروابط، وغيرها.

## Explanations {#explanations}
Explanations are short snippets of text that you can create to explain to
learners why the email or message in the question may be a phishing attack or
not. Explanations will be displayed after a learner answers a question, and
highlight specific elements in the question.

When you create a question, each explanation must be linked to an element in the
question, such as:
- The sender's name
- The sender's email address or phone number
- Specific words, sentences, or images inside an email or message
- Images or file attachments

The order of explanations that you see when you create the questions is the same
order in which the questions are presented to learners during the quiz.

## Variables {#variables}
Variables are placeholders that you can use to insert personalized information
into a question.

To add a variable, type the following in the question's content:
* ``{{name}}`` will display the learner's name
* ``{{email}}`` will display the learner's email address

Variables work slightly differently in public and private quizzes:
* In public quizzes, the name and email address displayed are drawn from what
  the learner entered or auto-generated during quiz setup.
* In private quizzes, the name and email address displayed are drawn from the
  learner's information as they were configured when the learner was invited to
  the Space.


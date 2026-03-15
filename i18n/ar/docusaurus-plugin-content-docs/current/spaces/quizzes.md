---
id: quizzes
slug: /quizzes
sidebar_position: 2
description: Learn how to create, manage, and customize quizzes in Shira to train your team on phishing awareness, including publishing, editing, duplicating, and deleting quizzes.

---
# اختبارات

في Shira، يُعد الاختبار المكون المركزي لأي برنامج أو حملة تعليمية ضد التصيد
الاحتيالي. يمنحك Shira المرونة الكاملة لبناء اختباراتكم الخاصة بما يتناسب مع
الاحتياجات الدقيقة لجمهوركم، وسياق عملهم، والتهديدات التي قد يواجهونها.

في مساحة Shira الخاصة بكم، يمكن:
- [إنشاء اختبارات](#create-quizzes)
- [تهيئة إعدادات الخصوصية](#privacy)
- [نشر وإلغاء نشر الاختبار](#publish-unpublish)
- [تعديل الاختبارات الموجودة](#edit-quizzes)
- [تكرار اختبار موجود](#duplicate-quiz)
- [حذف الاختبارات](#delete-quiz)

## إنشاء اختبارات {#create-quizzes}
عند إنشاء اختبار ما، يجب:
1. أطلقوا اسما على اختباركم
2. تحديد خصوصية الاختبارات

### اسم الاختبار {#name}
إن إطلاق اسم على الاختبار يساعدكم مع متعلميكم على التعرف على هدف الاختبار (مثلا:
'تدريب الموظفين في الربع الرابع للسنة المالية'، 'أكثر الهجمات شيوعا في 2026'،
إلخ). اسم الاختبار مرئي للمتعلمين:
- في البريد الإلكتروني الذي يتلقاه المتعلمون عندما تُعيِّنون لهم اختبارا (حصريا
  [للاختبارات الخاصة](#privacy))
- على شاشة الترحيب عندما يُجري المتعلمون الاختبار.

### خصوصية الاختبار {#privacy}
There are two options available for quiz privacy: public and private.

**The privacy of a quiz is permanent and cannot be changed**. If you want to
change the privacy of an existing quiz, you must to duplicate the quiz.

**Public quizzes**
* Anyone with the quiz URL can take a public quiz.
* The quiz URL is a URL unique to each quiz that learners use to take a quiz. A
  quiz URL looks like this:
  `https://quiz.shira.app/quiz/e57e406fdf46546786rru04676352bf0aff1c04f68. The
  quiz URL remains the same even if you publish and unpublish the quiz multiple
  times.
* Learners who take public quizzes remain anonymous. This means that in
  [Results](/results) you cannot identified who those learners are.

**Private quizzes**
* Only learners who are registered in your space can take the quiz. You can read
  more about [registered learners here](/learners#registered).
* When a registered learner is assigned a private quiz, they receive an email
  with the link to take the quiz. This link is unique to each learner and helps
  keep track of who takes the quiz and their results.

## Adding question to your quiz {#questions}

You can add questions to your quiz either by creating them manually or importing
ready-made templates from the Library. [Learn more about questions
here](/questions).

## Publishing and unpublishing quizzes {#publish-unpublish}
Publishing a quiz means that you are making it accessible to learners.

You can then unpublish the quiz to make it impossible for learners to take it.
If the quiz is unpublished, the quiz URL will lead to an error page.

:::note If you unpublish a quiz *while* a learner is taking it, the learner will
see an error message at the end of the quiz when they try to submit their
answers, and their submission will be lost. :::

## Editing quizzes {#edit-quizzes}
You can edit any quiz, whether it is published or unpublished, including:
- Adding new questions to the quiz.
- Editing questions that already exist in the quiz.
- Reording questions: the order of questions that you see in your space is the
  same order that the questions will be shown to learners when they take the
  quiz.
- Deleting questions: once deleted, there is no way of retrieving a question.

:::note If some learners have already taken the quiz, editing this quiz may
affect the reliability of [the quizz's results](/results). :::

## Duplicating a quiz {#duplicate-quiz}
Duplicating a quiz means creating an exact copy of an existing quiz.

Once duplicated, the original quiz and the new quiz are independent from each
other: you can edit or delete one, the other will be unaffected. **Results
associated with the original quizz *will not* be moved to the new copy of the
quiz**.

You can set a quiz privacy settings (public or private) at the time of
duplication.


## Deleting a quiz {#delete-quiz}
Deleting a quiz means that the quiz, all the questions inside the quiz, and any
[results](/results) associated with this quiz are deleted from your space.

:::warning Deleting a quiz is permanent: once deleted, a quiz and its results
cannot be recovered! :::

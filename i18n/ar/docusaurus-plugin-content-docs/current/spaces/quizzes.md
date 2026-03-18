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
- [استنساخ اختبار موجود](#duplicate-quiz)
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
هناك خياران متاحان لخصوصية الاختبار: عمومي وخاص.

**خصوصية الاختبار دائمة ولا يمكن تغييرها**. إذا أردت تغيير إعدادات الخصوصية
لاختبار موجود بالفعل، فيجب عليك استنساخ الاختبار.

**الاختبارات العمومية**
* يمكن لأي شخص لديه رابط الاختبار اجراء اختبار عمومي.
* رابط الاختبار هو رابط فريد خاص بكل اختبار، يستخدمه المتعلمون لإجراء الاختبار.
  يبدو رابط الاختبار بهذا الشكل:
  `https://quiz.shira.app/quiz/e57e406fdf46546786rru04676352bf0aff1c04f68. يبقى
  رابط الاختبار كما هو، حتى لو قمت بنشر الاختبار وإلغاء نشره عدة مرات.
* يظل المتعلمون الذين يجرون اختبارات عمومية مجهولي الهوية. وهذا يعني أنه في قسم
  [النتائج](/results)، لن تتمكنوا من تحديد هوية هؤلاء المتعلمين.

**الاختبارات الخاصة**
* يمكن فقط للمتعلمين المسجلين في مساحة العمل الخاصة بك إجراء الاختبار. يمكنك
  قراءة المزيد عن [المتعلمين المسجلين هنا](/learners#registered).
* عندما يتم تعيين اختبار خاص لمتعلم مسجل، فإنه يتلقى رسالة بريد إلكتروني تحتوي
  على رابط لإجراء الاختبار. هذا الرابط فريد لكل متعلم، ويساعد في تتبع من قام
  بإجراء الاختبار ومعرفة نتائجه.

## إضافة سؤال إلى الاختبار {#questions}

يمكنكم إضافة أسئلة إلى اختباراتكم إما عن طريق إنشائها يدوياً أو استيراد قوالب
جاهزة من المكتبة. [تعرفوا على المزيد حول الأسئلة هنا](/questions).

## نشر الاختبارات وإلغاء نشرها {#publish-unpublish}
نشر اختبار يعني أنكم تتيحون للمتعلمين إمكانية الوصول إليه.

يمكنكم بعد ذلك إلغاء نشر الاختبار لمنع المتعلمين من إجرائه. وفي حال إلغاء نشر
الاختبار، فإن رابط الاختبار سيُظهر صفحة خطأ.

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

## استنساخ اختبار {#duplicate-quiz}
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

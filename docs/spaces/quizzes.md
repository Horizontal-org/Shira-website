---
id: quizzes
slug: /quizzes
sidebar_position: 3
description: Learn how to create, manage, and customize quizzes in Shira to train your team on phishing awareness, including publishing, editing, duplicating, and deleting quizzes.

---
# Quizzes

In Shira, a quiz is the central component of a phishing education campaign or program. Shira lets you build your own quizzes to match your audience's specific needs, context, and threats.

In your Shira Space, you can:
- [create quizzes](#create-quizzes)
- [configure privacy settings](#privacy)
- [publish and unpublish a quiz](#publish-unpublish) 
- [edit existing quizzes](#edit-quizzes) 
- [duplicate an existing quiz](#duplicate-quiz)
- [delete quizzes](#delete-quiz)

## Creating quizzes {#create-quizzes}
When you create a quiz, you must:
1. Name your quiz
2. Set the privacy of your quiz

### Quiz name {#name}
The name your pick for the quiz helps you and your learners recognize the purpose of your quiz (eg. "Q4 staff training", "2026 most common attacks", etc). The quiz name is visible to learners:
- In the email learners receive when you assign them a quiz (exclusively for [private quizzes](#privacy))
- On the welcome screen when learners take the quiz.

### Quiz privacy {#privacy}
There are two options available for quiz privacy: public and private.

**The privacy of a quiz is permanent and cannot be changed**. If you want to change the privacy of an existing quiz, you must to duplicate the quiz.

**Public quizzes**
* Anyone with the quiz URL can take a public quiz.
* The quiz URL is a URL unique to each quiz that learners use to take a quiz. A quiz URL looks like this: `https://quiz.shira.app/quiz/e57e406fdf46546786rru04676352bf0aff1c04f68. The quiz URL remains the same even if you publish and unpublish the quiz multiple times.
* Learners who take public quizzes remain anonymous. This means that in [Results](/results) you cannot identified who those learners are. 

**Private quizzes**
* Only learners who are registered in your space can take the quiz. You can read more about [registered learners here](/learners#registered).
* When a registered learner is assigned a private quiz, they receive an email with the link to take the quiz. This link is unique to each learner and helps keep track of who takes the quiz and their results.  

## Adding question to your quiz {#questions}

You can add questions to your quiz either by creating them manually or importing ready-made templates from the Library. [Learn more about questions here](/questions).

## Publishing and unpublishing quizzes {#publish-unpublish}
Publishing a quiz means that you are making it accessible to learners. 

You can then unpublish the quiz to make it impossible for learners to take it. If the quiz is unpublished, the quiz URL will lead to an error page. 

:::note
If you unpublish a quiz *while* a learner is taking it, the learner will see an error message at the end of the quiz when they try to submit their answers, and their submission will be lost. 
:::

## Editing quizzes {#edit-quizzes}
You can edit any quiz, whether it is published or unpublished, including:
- Adding new questions to the quiz.
- Editing questions that already exist in the quiz.
- Reording questions: the order of questions that you see in your space is the same order that the questions will be shown to learners when they take the quiz.
- Deleting questions: once deleted, there is no way of retrieving a question. 

:::note
If some learners have already taken the quiz, editing this quiz may affect the reliability of [the quizz's results](/results).
:::

## Duplicating a quiz {#duplicate-quiz}
Duplicating a quiz means creating an exact copy of an existing quiz. 

Once duplicated, the original quiz and the new quiz are independent from each other: you can edit or delete one, the other will be unaffected.  **Results associated with the original quizz *will not* be moved to the new copy of the quiz**.

You can set a quiz privacy settings (public or private) at the time of duplication.


## Deleting a quiz {#delete-quiz}
Deleting a quiz means that the quiz, all the questions inside the quiz, and any [results](/results) associated with this quiz are deleted from your space. 

:::warning
Deleting a quiz is permanent: once deleted, a quiz and its results cannot be recovered!
:::
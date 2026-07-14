---
id: release-notes
slug: /release-notes
sidebar_position: 1
description: 及时了解 Shira 最新功能和改进，包括空间、可定制测验和题目、解析、多应用支持以及学员结果。

---

# 发布说明

:::tip\
这里包含关于 Shira
最新功能与改进的所有重要信息。如有遗漏，请[在此处提交建议新功能或改进意见](https://github.com/Horizontal-org/shira/discussions)。\
:::

## Shira 2.1 {/* #shira-21 */}
*Released on 7 July 2026*

#### 🌟 New feature: quiz templates! {/* #-new-feature-quiz-templates */}

- The Template library now includes not just quiz questions, but full quizzes
  ready to be imported into your space. This means you no longer have to build a
  quiz from scratch, you can start training your team within minutes.
- Filter and search the library by keyword, language, apps, and more.
- Using a template from the library creates a copy of the template into your
  space. After you use a template, the original template and the quiz in your
  space are separate and independent from each other, and you can edit the quiz
  in your space to customize it to your needs.

#### 🌟 New feature: add more admins to your space! {/* #-new-feature-add-more-admins-to-your-space */}
Up until now, a team had to use a shared account to collaborate in a space. Now,
spaces support multiple admins, each with their own account and credentials.
It's not yet possible to add additional admins yourself, but just [reach
out](/contact) and we'll help.

:::note Multi-admins is only available to users on [the Enterprise
plan](/pricing). :::

#### 🌟 New feature: multilingual spaces! {/* #-new-feature-multilingual-spaces */}
Spaces are now multilingual! The interface of the entire Space is available in
Spanish, French, Russian, Chinese (simplified), and Arabic (Arabic is
unfortunately not yet available in a right-to-left interface, but we'll be
working on that soon).

Just head to Settings to select your preferred language.


#### Improvements {/* #improvements */}
**Explanations:**
- When creating a question, adding an explanation attached to text in the email
  or message body now auto-focuses on the explanation so you can start typing
  the explanation right away.
- You can now add line breaks inside explanations, making long explanations a
  lot more readable.

**Privacy:**
- Learners can now see, on the instruction screen before taking a quiz, exactly
  what data we collect as they take the quiz.

**Usability:**
- Every text field in Shira now has a visual indicator to inform the user of the
  field's character limit.
- The list of questions inside a quiz was revamped to provide more information
  about each question, including the type (phishing or legitimate) and the app
  used.

#### Fixes {/* #fixes */}
- When entering the wrong email address or password on the login screen, we
  replaced the browser's default error modal with a more informative error
  directly in the Shira UI.
- We fixed the spelling of WhatsApp throughout the app (it was Whatsapp).
- When creating a space, we removed the login button from the confirmation space
  to reduce confusion.
- When deleting a quiz, in the warning modal, we now only show the note "This
  quizz's Results will also be deleted" when there actually are Results in the
  Quiz (when at least one learner has taken the quiz).
- Inside quiz questions, we fixed the color of links, which showed up as black
  instead of blue when there was an explanation attached to it.
- We renamed the question editing screens from "Create a new question" to "Edit
  question".

## Shira 2.0 {/* #shira-20 */}
*Released on 20 May 2026*

#### New {/* #new */}
- The report of the latest security audit is now [available on a new Security
  page](/security)

#### Improvements {/* #improvements-1 */}
- Email [demo questions](https://quiz.shira.app/) are now available in Outlook
- Bug fixes and UX improvements.

## Shira 2.0-beta7 {/* #shira-20-beta7 */}
*Released on 20 April 2026*

#### Improvements {/* #improvements-2 */}
- New screen to manage space settings, including to update the email address
  associeted with the account and update the password.
- Users can now subscribe to a Shira plan and manage their plan and subscription
  directly from inside the Shira space.
- Bug fixes and UX improvements.

## Shira 2.0-beta6 {/* #shira-20-beta6 */}
*Released on 2 March 2026*

#### New {/* #new-1 */}
- User can now reset their password from the login page.
- User can import learners in bulk by uploading a CSV, instead of having to
  create large number of learners one by one
- New Results metrics:
   - Completion rate: the percentage of learners who have submitted the quiz out
     of all the learners assigned this quiz. Completion rate is only available
     for private quizzes.
   - Results by question: the average score received by all learners on each
     specific question in the quiz.
   - Results by learner: the list of registered learners who completed the quiz
     and their score on the quiz. Results by learner are only available for
     private quizzes.

## Shira 2.0-beta5 {/* #shira-20-beta5 */}
*发布于 2026 年 1 月 29 日*

此版本推出私有测验，用户最期待的功能！
- 私有测验：只有空间的注册学员才能参加测验。
- 注册学员：指管理员邀请加入空间的学员，其结果与其账号关联，以便查看每位学员的测验表现。

## Shira 2.0-beta4 {/* #shira-20-beta4 */}
*发布于 2025 年 11 月 3 日*

此版本几乎包含 Shira 2.0 中的全部功能。您已经可以使用以下功能：
- 组织空间：用于管理测验和查看结果。
- 可定制测验：创建任意数量的测验。
- 可定制测验题目：根据团队的需求和水平，量身定制测验题目。
- 解析：在测验题目中直接展示简短文本，引导学员关注题目内容中的特定元素，这些元素可能表明它钓鱼攻击或正规内容。
- 提供六种应用模拟界面，让您的题目尽可能贴近学员面临的现实情况：Gmail、Outlook、WhatsApp、短信（SMS）、Facebook
  Messenger 和交友应用。
- 结果：查看学员的测验表现。


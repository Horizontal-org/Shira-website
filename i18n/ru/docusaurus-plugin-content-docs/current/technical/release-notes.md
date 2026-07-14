---
id: release-notes
slug: /release-notes
sidebar_position: 1
description: Будьте в курсе последних новостей о функциях и улучшениях Shira, включая пространства, настраиваемые тесты и вопросы, пояснения, поддержку приложений и результаты учащихся.

---

# Примечания к релизу

:::tip Здесь вы найдете всю необходимую информацию о последних функциях и
улучшениях в Shira. Если чего-то не хватает, вы можете [предложить новые функции
или улучшения](https://github.com/Horizontal-org/shira/discussions). :::

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
*Версия от 29 января 2026 года*

Представляем закрытые тесты — наш самый востребованный функционал!
- Закрытые тесты могут проходить только учащиеся, зарегистрированные в вашем
  пространстве.
- Зарегистрированные учащиеся: те, кого пригласили присоединиться к вашему
  пространству и чьи результаты привязаны к их аккаунтам (это позволяет вам
  наблюдать, как каждый из них справляется с вашими тестами).

## Shira 2.0-beta4 {/* #shira-20-beta4 */}
*Версия от 3 ноября 2025 года*

Приближаемся к полному функционалу будущей версии Shira 2.0. Ниже перечислены
функции, доступные уже сегодня.
- Организационные пространства: место, где вы можете управлять тестами и
  просматривать результаты.
- Настраиваемые тесты: создавайте столько тестов, сколько хотите.
- Настраиваемые вопросы теста: создавайте вопросы с учетом потребностей и
  возможностей вашей команды.
- Пояснения: короткие тексты прямо в вопросах, чтобы обратить внимание учащихся
  на признаки фишингового или достоверного сообщения.
- Шесть приложений для показа ваших вопросов и максимальной реалистичности:
  Gmail, Outlook, WhatsApp, SMS, Facebook Messenger и приложение для знакомств.
- Результаты: контролируйте, как ваши ученики справляются с тестами.


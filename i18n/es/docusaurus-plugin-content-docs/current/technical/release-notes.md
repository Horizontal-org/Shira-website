---
id: release-notes
slug: /release-notes
sidebar_position: 1
description: Mantente al día con las últimas  funciones y mejoras de Shira, incluyendo Espacios, cuestionarios y preguntas personalizables, explicaciones, soporte multi-app, y resultados de estudiantes.

---

# Notas de Lanzamiento

:::tip\
Aquí está todo lo que necesitas saber sobre las últimas funcionalidades y
mejoras en Shira. Si falta algo, puedes [sugerir nuevas funciones o mejoras
aquí](https://github.com/Horizontal-org/shira/discussions).\
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
*Lanzada el 29 de Enero de 2026*

Este lanzamiento introduce los cuestionarios privados -- ¡Nuestra función más
solicitada!
- Cuestionarios privados: cuestionarios que solo pueden ser completados por
  estudiantes con registro en tu espacio.
- Estudiantes en registro: estudiantes que han recibido invitación de una cuenta
  admin para unirse a tu espacio y cuyos resultados están vinculados a su
  cuenta, permitiéndote ver cómo les va en tus cuestionarios.

## Shira 2.0-beta4 {/* #shira-20-beta4 */}
*Lanzada el 3 de Noviembre de 2025*

Con este lanzamiento, nos acercamos al conjunto completo de funcionalidades que
se incluirá en Shira 2.0. Ya puedes encontrar las siguientes funcionalidades:
- Espacios organizacionales: un lugar para que gestiones cuestionarios y veas
  resultados.
- Cuestionarios personalizables: crea tantos cuestionarios como desees.
- Preguntas de cuestionario personalizables: crea preguntas de cuestionario
  adaptadas a las necesidades y capacidades de tu equipo.
- Explicaciones: muestra textos cortos, directamente dentro de las preguntas del
  cuestionario, para señalar a tus estudiantes elementos específicos del
  contenido en la pregunta que sugiere que puede tratarse de un ataque de
  phishing o que podría ser legítimo.
- Seis apps para mostrar tus preguntas y hacerlas parecer lo más cercano posible
  a lo que tus estudiantes experimentarán en la vida real: Gmail, Outlook,
  WhatsApp, SMS, Facebook Messenger, y App de Citas.
- Resultados: ve qué tan bien les fue a tus estudiantes en tus cuestionarios.


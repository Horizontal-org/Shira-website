---
id: release-notes
slug: /release-notes
sidebar_position: 1
description: Restez informé des dernières fonctionnalités et améliorations de Shira, notamment Spaces, les quiz et questions personnalisables, les explications, la prise en charge multi-applications et les scores des apprenants et apprenantes.

---

# Notes de version

:::tip Voici tout ce que vous devez savoir sur les dernières fonctionnalités et
améliorations de Shira. S'il manque quelque chose, vous pouvez [suggérer de
nouvelles fonctionnalités ou améliorations
ici](https://github.com/Horizontal-org/shira/discussions). : ::

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
*Sortie le 20 mai 2026*

#### New {/* #new */}
- Le rapport du dernier audit de sécurité est désormais [disponible sur une
  nouvelle page Sécurité](/security)

#### Improvements {/* #improvements-1 */}
- Les [questions de démonstration](https://quiz.shira.app/) par e-mail sont
  désormais disponibles dans Outlook
- Bug fixes and UX improvements.

## Shira 2.0-beta7 {/* #shira-20-beta7 */}
*Sortie le 20 avril 2026*

#### Improvements {/* #improvements-2 */}
- Nouvel écran pour gérer les paramètres de l'espace, y compris la mise à jour
  de l'adresse e-mail associée au compte et la modification du mot de passe.
- Les utilisateurs peuvent désormais s'abonner à un forfait Shira et gérer leur
  forfait ainsi que leur abonnement directement depuis l'espace Shira.
- Bug fixes and UX improvements.

## Shira 2.0-beta6 {/* #shira-20-beta6 */}
*Sortie le 2 mars 2026*

#### New {/* #new-1 */}
- L'utilisateur peut désormais réinitialiser son mot de passe depuis la page de
  connexion.
- L'utilisateur peut importer des apprenants en masse en téléchargeant un
  fichier CSV, au lieu de devoir créer un grand nombre d'apprenants un par un
- Nouvelles métriques de résultats :
   - Taux de complétion : le pourcentage d'apprenants ayant soumis le quiz par
     rapport à l'ensemble des apprenants auxquels ce quiz a été attribué. Le
     taux de complétion est uniquement disponible pour les quiz privés.
   - Résultats par question : le score moyen obtenu par l'ensemble des
     apprenants pour chaque question spécifique du quiz.
   - Résultats par apprenant : la liste des apprenants inscrits ayant terminé le
     quiz et leur score obtenu. Les résultats par apprenant sont uniquement
     disponibles pour les quiz privés.

## Shira 2.0-beta5 {/* #shira-20-beta5 */}
*Publié le 29 janvier 2026*

Cette version introduit les quiz privés--notre fonctionnalité la plus demandée !
- Quiz privés : quiz auxquels seuls les apprenants et apprenantes inscrits dans
  votre espace peuvent participer.
- Apprenants et apprenantes inscrits : les apprenants qui ont été invités par un
  administrateur ou administratrice à rejoindre votre espace et dont les scores
  sont rattachés à leur compte, vous permettant ainsi de suivre la progression
  de chacun sur vos quiz.

## Shira 2.0-beta4 {/* #shira-20-beta4 */}
*Publié le 3 novembre 2025*

Avec cette version, nous nous rapprochons de l'ensemble complet des
fonctionnalités qui seront incluses dans Shira 2.0. Vous pouvez déjà trouver les
fonctionnalités suivantes :
- Espaces d'organisation : un endroit pour gérer vos quiz et consulter les
  scores.
- Quiz personnalisables : créez autant de quiz que vous le souhaitez.
- Questions de quiz personnalisables : créez des questions adaptées aux besoins
  et aux compétences de votre équipe.
- Explications : affichez de courts textes, directement à l'intérieur des
  questions du quiz, pour signaler aux apprenants et apprenantes des éléments
  spécifiques du contenu suggérant qu'il peut s'agir d'une attaque d'hameçonnage
  ou d'un message légitime.
- Six applications pour afficher vos questions et leur donner une apparence
  aussi proche que possible de ce à quoi vos apprenants et apprenantes seront
  confrontés dans la réalité : Gmail, Outlook, WhatsApp, SMS, Facebook Messenger
  et Application de rencontre.
- Scores : découvrez les performances de vos apprenants et apprenantes à vos
  quiz.


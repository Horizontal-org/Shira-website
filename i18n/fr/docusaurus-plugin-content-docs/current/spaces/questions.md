---
id: questions
slug: /questions
sidebar_position: 3
description: Learn how to create and customize quiz questions in Shira — including preferences, apps, content, and explanations — to teach learners how to identify phishing attempts.

---

# Questions

Les questions de quiz sont le cœur de l'apprentissage dans Shira. C'est ici que
vous présentez un e-mail ou un message à vos apprenants et que vous leur
demandez : cela ressemble-t-il à du phishing ?

Chaque question est composée de plusieurs éléments :
* [Les préférences de la question](#preferences)
* [Une application](#app)
* [Le contenu de la question](#content)
* [Variables](#variables)
* [Explications](#explanations)

## Créer une question {#create}
Pour créer des questions et les ajouter à votre quiz, deux options s'offrent à
vous :
1. Il est possible de personnaliser vos questions dans leur intégralité et de
   définir vous-même l'ensemble de leurs composantes.
2. Vous pouvez importer des questions prêtes à l'emploi depuis la Bibliothèque.
   Si vous importez une question depuis la Bibliothèque, vous pouvez l'utiliser
   telle quelle ou l'adapter à votre contexte et à vos besoins spécifiques.

## Préférences de la question {#preferences}
Lorsque vous créez une question, vous devez :
- Nommer la question : ce nom, comme "Invitation à une conférence" ou
  "Notification de connexion suspecte", vous aide à reconnaître les questions
  que vous créez. Le nom d'une question est uniquement visible par les
  administrateurs de l'espace ; les apprenants ne le voient jamais lorsqu'ils
  participent à un quiz.
- Indiquez à Shira si l'email ou le message que vous créez est *du phishing* ou
  s'il est *légitime*. Cela permettra à Shira de déterminer si la réponse d'un
  utilisateur est correcte.

## Une application {#app}
Une *application* est une interface qui ressemble exactement à l'application ou
à la plateforme réelle que vos apprenants utilisent au quotidien : Gmail,
Outlook, SMS, WhatsApp, etc.

Avec les applications, Shira affiche un email ou un message exactement tel qu'il
apparaîtrait dans la vie réelle. Cela signifie que lorsqu'ils seront confrontés
à une véritable attaque de phishing, les apprenants seront plus susceptibles de
savoir où chercher les indices prouvant qu'il s'agit d'un hameçonnage.

Actuellement, Shira prend en charge les applications suivantes :
- Gmail
- Outlook
- SMS
- WhatsApp
- Facebook Messenger
- Application de rencontre

:::note [Informez-nous](/contact) si votre équipe utilise des applications qui
ne figurent pas dans cette liste et que vous souhaiteriez voir intégrées à Shira
! :::

## Contenu de la question {#content}
Le contenu d'une question correspond à l'email ou au message que vous rédigez
pour l'afficher dans le quiz.

Il peut s'agir de tous les éléments habituellement présents dans les emails et
les messages : texte, images, pièces jointes, liens, etc.

## Explications {#explanations}
Les explications sont de courts extraits de texte permettant d'expliquer aux
apprenants pourquoi l'e-mail ou le message de la question pourrait être une
tentative d'hameçonnage. Les explications s'affichent après la réponse de
l'apprenant et mettent en évidence des éléments spécifiques de la question.

Lorsque vous créez une question, chaque explication doit être liée à un élément
de la question, tel que :
- Le nom de l’expéditeur
- L’adresse courriel ou le numéro de téléphone de l’expéditeur
- Des mots, phrases ou images spécifiques contenus dans un courriel ou un
  message
- Des images ou des pièces jointes

L’ordre d’affichage des explications lors de la création des questions
correspond à l’ordre dans lequel elles sont présentées aux apprenants pendant le
quiz.

## Variables {#variables}
Les variables sont des espaces réservés permettant d’insérer des informations
personnalisées dans une question.

Pour ajouter une variable, saisissez le texte suivant dans le contenu de la
question :
* ``{{name}}`` affichera le nom de l'apprenant
* ``{{email}}`` affichera l'adresse e-mail de l'apprenant

Le fonctionnement des variables diffère légèrement selon qu'il s'agit d'un quiz
public ou privé :
* Dans un quiz public, le nom et l'adresse email affichés sont ceux saisis par
  l'apprenant ou générés automatiquement lors de la configuration du quiz.
* Dans les quiz privés, le nom et l'adresse électronique affichés sont tirés des
  informations de l'apprenant telles qu'elles ont été configurées lors de son
  invitation à l'Espace.


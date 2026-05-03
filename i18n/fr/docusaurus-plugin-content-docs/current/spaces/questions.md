--
id: questions
slug: /questions
sidebar_position: 3
description: Apprenez à créer et à personnaliser des questions pour les quiz dans Shira — en incluant vos préférences, des applications, du contenu et des explications — pour apprendre aux apprenants à repérer les tentatives d'hameçonnage.

---

# Questions

C'est grâce aux questions types quiz que l'apprentissage se fait sur Shira. Vous
montrez à vos apprenants et apprenantes un e-mail ou un message, et vous leur
demandez : S'agit-il d'une tentative d'hameçonnage ?

Chaque question est composée de plusieurs éléments :
* [Les préférences de la question](#preferences)
* [Une application](#app)
* [Contenu de la question](#content)
* [Variables](#variables)
* [Explications](#explanations)

## Formuler une question {#create}
Pour créer des questions et les ajouter à votre quiz, deux options vous sont
proposées :
1. Il est possible de personnaliser vos questions dans leur intégralité et de
   définir vous-même l'ensemble de leurs composantes.
2. Vous pouvez importer des questions prédefinies depuis la Bibliothèque. Si
   vous importez une question depuis la Bibliothèque, vous pouvez l'utiliser
   telle quelle ou l'adapter à votre contexte et à vos besoins spécifiques.

## Préférences de la question {#preferences}
Lorsque vous créez une question, vous devez :
- Nommer la question : ce nom, comme "Invitation à une conférence" ou
  "Notification de connexion suspecte", vous aide à reconnaître les questions
  que vous créez. Le nom d'une question est uniquement visible par les
  administrateurs et administratrices de l'espace ; les apprenants et
  apprenantes ne le voient jamais lorsqu'ils participent à un quiz.
- Indiquez à Shira si l'email ou le message que vous créez est *de
  l'hameçonnage* ou s'il est *légitime*. Cela permettra à Shira de déterminer si
  la réponse d'un utilisateur ou d'une utilisatrice est correcte.

## Une appli {#app}
Une *appli* est une interface qui ressemble exactement à l'application ou à la
plateforme réelle que vos apprenants ou apprenantes utilisent au quotidien :
Gmail, Outlook, SMS, WhatsApp, etc.

Avec les appli, Shira affiche un email ou un message exactement tel qu'il
apparaîtrait dans la vie réelle. Cela signifie que lorsqu'ils seront confrontés
à une véritable attaque d'hameçonnage, les apprenants et apprenantes seront plus
susceptibles de savoir où chercher les indices prouvant qu'il s'agit d'un
hameçonnage.

Actuellement, Shira prend en charge les applications suivantes :
- Gmail
- Outlook
- SMS
- WhatsApp
- Facebook Messenger
- Application de rencontre

:::note\
[Dites nous](/contact) si votre équipe utilise des applications qui ne figurent
pas dans cette liste et que vous souhaiteriez voir intégrées à Shira ! \
:::

## Contenu de la question {#content}
Le contenu d'une question correspond au texte de l'e-mail ou du message que vous
rédigez pour l'afficher dans le questionnaire.

Il peut s'agir de tous les éléments habituellement présents dans les emails et
les messages : texte, images, pièces jointes, liens, etc.

## Explications {#explanations}
Les explications sont de courts extraits de texte permettant d'expliquer
pourquoi l'e-mail ou le message de la question pourrait être une tentative
d'hameçonnage. Les explications s'affichent après la réponse de l'apprenant ou
l'apprenante et mettent en évidence des éléments spécifiques de la question.

Lorsque vous créez une question, chaque explication doit être liée à un élément
de la question, tel que :
- Nom de l’expéditeur
- L'email ou le numéro de téléphone de l’expéditeur ou de l'expéditrice
- Des mots, des phrases ou des images spécifiques figurant dans un e-mail ou un
  message
- Des images ou des pièces jointes

L’ordre d’affichage des explications lors de la création des questions
correspond à l’ordre dans lequel elles sont présentées aux apprenants et
apprenantes pendant le quiz.

## Variables {#variables}
Les variables sont des espaces réservés permettant d’insérer des informations
personnalisées dans une question.

Pour ajouter une variable, saisissez le texte suivant dans le contenu de la
question :
* ``{{name}}`` affichera le nom de l'apprenant ou de l'apprenante
* ``{{email}}`` affichera l'adresse e-mail de l'apprenant ou de l'apprenante

Le fonctionnement des variables diffère légèrement selon qu'il s'agit d'un quiz
public ou privé :
* Dans un quiz public, le nom et l'adresse email affichés sont ceux saisis par
  l'apprenant ou l'apprenante ou générés automatiquement lors de la
  configuration du quiz.
* Dans les quiz privés, le nom et l'email affichés sont tirés des informations
  de l'apprenant ou apprenante telles qu'elles ont été configurées lors de son
  invitation à l'Espace.


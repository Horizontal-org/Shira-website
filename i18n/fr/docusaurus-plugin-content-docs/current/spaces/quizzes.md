---
id: quizzes
slug: /quizzes
sidebar_position: 2
description: Apprenez à créer, gérer et personnaliser des questionnaires dans Shira pour former votre équipe à être sensible au phishing, et ce en publiant, modifiant, dupliquant et supprimant des questionnaires .

---
# Les quiz

Dans Shira, le quiz est l'élément central d'une campagne ou d'un programme de
sensibilisation au phishing. Shira vous permet de créer vos propres quiz pour
répondre aux besoins, au contexte et aux menaces spécifiques de votre public.

Dans votre espace Shira, vous pouvez :
- [créer des quiz](#create-quizzes)
- [configurer les paramètres de confidentialité] (#privacy)
- [publier et dépublier un quiz](#publish-unpublish)
- [modifier des quiz existants](#edit-quizzes)
- [dupliquer un quiz existant](#duplicate-quiz)
- [supprimer des quiz](#delete-quiz)

## Créer des quiz {#create-quizzes}
Lorsque vous créez un quiz, vous devez :
1. Nommer votre quiz
2. Définir les paramètres de confidentialité de votre quiz

### Nom du quiz {#name}
Le nom que vous choisissez pour le quiz vous aide, ainsi que vos apprenants, à
en identifier l'objectif (ex. : "Formation du personnel T4", "Attaques les plus
courantes de 2026", etc.). Le nom du quiz est visible par les apprenants :
- Dans l'email que les apprenants reçoivent lorsque vous leur attribuez un quiz
  (exclusivement pour les [quiz privés](#privacy))
- Sur l'écran d'accueil lorsque les apprenants commencent le quiz.

### Confidentialité du quiz {#privacy}
Deux options de confidentialité sont disponibles pour les quiz : public et
privé.

**La confidentialité d'un quiz est permanente et ne peut pas être modifiée.**.
Si vous souhaitez changer la confidentialité d'un quiz existant, vous devez
dupliquer le quiz.

**Quiz publics**
* Toute personne disposant de l'URL du quiz peut y participer.
* L'URL du quiz est une adresse unique à chaque quiz que les apprenants
  utilisent pour y participer. Une URL de quiz ressemble à ceci :
  `https://quiz.shira.app/quiz/e57e406fdf46546786rru04676352bf0aff1c04f68. L'URL
  du quiz reste la même, même si vous publiez et dépubliez le quiz plusieurs
  fois.
* Les apprenants qui participent à des quiz publics restent anonymes. Cela
  signifie que dans les [Résultats](/results), vous ne pouvez pas identifier qui
  sont ces apprenants.

**Quiz privés**
* Seuls les apprenants inscrits dans votre espace peuvent participer au quiz.
  Vous pouvez en savoir plus sur les [apprenants inscrits
  ici](/learners#registered).
* Lorsqu'un quiz privé est attribué à un apprenant inscrit, celui-ci reçoit un
  email contenant le lien pour participer au quiz. Ce lien est unique à chaque
  apprenant et permet de suivre qui participe au quiz ainsi que leurs résultats.

## Ajouter des questions à votre quiz {#questions}

Vous pouvez ajouter des questions à votre quiz soit en les créant manuellement,
soit en important des modèles prêts à l'emploi depuis la Bibliothèque. [En
savoir plus sur les questions ici](/questions).

## Publier et dépublier des quiz {#publish-unpublish}
Publier un quiz signifie que vous le rendez accessible aux apprenants.

Vous pouvez ensuite dépublier le quiz pour qu'il soit impossible pour les
apprenants d'y participer. Si le quiz est dépublié, l'URL du quiz mènera à une
page d'erreur.

:::note
Si vous dépubliez un quiz *pendant* qu'un apprenant y participe, l'apprenant
verra un message d'erreur à la fin du quiz lorsqu'il tentera d'envoyer ses
réponses, et sa participation sera perdue .
:::

## Modifier des quiz {#edit-quizzes}
Vous pouvez modifier n'importe quel quiz, qu'il soit publié ou dépublié,
notamment pour :
- Ajouter de nouvelles questions au quiz.
- Modifier des questions déjà existantes dans le quiz.
- Réorganiser les questions : l'ordre des questions que vous voyez dans votre
  espace est le même que celui dans lequel les questions seront présentées aux
  apprenants lorsqu'ils feront le quiz.
- Supprimer des questions : une fois supprimée, il n'y a aucun moyen de
  récupérer une question.

:::note
Si des apprenants ont déjà participé au quiz, la modification de celui-ci peut
affecter la fiabilité [des résultats du quiz](/results).
:::

## Dupliquer un quiz {#duplicate-quiz}
Dupliquer un quiz signifie créer une copie conforme d'un quiz existant.

Une fois dupliqués, le quiz original et le nouveau quiz sont indépendants l'un
de l'autre : vous pouvez modifier ou supprimer l'un sans que l'autre ne soit
affecté. **Les résultats associés au quiz original *ne seront pas* transférés
vers la nouvelle copie du quiz**.

Vous pouvez définir les paramètres de confidentialité (public ou privé) au
moment de la duplication.


## Supprimer un quiz {#delete-quiz}
Supprimer un quiz signifie que le quiz, toutes les questions qu'il contient et
tous les [résultats](/results)associés à ce quiz sont supprimés de votre espace.

:::warning
La suppression d'un quiz est permanente : une fois supprimés, un quiz et ses
résultats ne peuvent pas être récupérés !
:::

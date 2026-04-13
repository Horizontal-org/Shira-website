---
id: quizzes
slug: /quizzes
sidebar_position: 2
description: Learn how to create, manage, and customize quizzes in Shira to train your team on phishing awareness, including publishing, editing, duplicating, and deleting quizzes.

---
# Cuestionarios

En Shira, un cuestionario es el componente central de una campaña o programa
educativos sobre phishing. Shira te permite elaborar tus propios cuestionarios
para adaptarlos a las necesidades, contexto, y amenazas específicas de tu
audiencia.

En tu Espacio Shira, puedes:
- [crear cuestionarios](#create-quizzes)
- [configurar ajustes de privacidad](#privacy)
- [publicar y despublicar un cuestionario](#publish-unpublish)
- [editar cuestionarios existentes](#edit-quizzes)
- [duplicar un cuestionario existente](#duplicate-quiz)
- [eliminar cuestionarios](#delete-quiz)

## Crear cuestionarios {#create-quizzes}
Al crear un cuestionario, debes:
1. Nombrar tu cuestionario
2. Establecer la privacidad de tu cuestionario

### Nombre del cuestionario {#name}
El nombre que elijas para el cuestionario te ayudará a ti y a tus estudiantes a
reconocer el propósito de tu cuestionario (p. ej., "Capacitación del personal
T4", "Los ataques más comunes de 2026", etc). El nombre del cuestionario es
visible para estudiantes:
- En el correo que reciben quienes estudian cuando les asignas un cuestionario
  (exclusivamente para [cuestionarios privados](#privacy))
- En la pantalla de bienvenida cuando quienes estudian completan un
  cuestionario.

### Privacidad del cuestionario {#privacy}
Hay dos opciones disponibles para la privacidad de los cuestionarios: público y
privado.

**La privacidad de un cuestionario es permanente y no se puede cambiar**. Si
quieres cambiar la privacidad de un cuestionario existente, debes duplicarlo.

**Cuestionarios públicos**
* Cualquiera con la URL del cuestionario puede completar un cuestionario
  público.
* La URL de un cuestionario es única para cada cuestionario que tus estudiantes
  usan para completar un cuestionario. Una URL de cuestionario se ve como esta:
  https://quiz.shira.app/quiz/e57e406fdf46546786rru04676352bf0aff1c04f68. La URL
  del cuestionario permanece igual incluso si publicas y despublicas el
  cuestionario múltiples veces.
* Las personas estudiantes que completen cuestionarios públicos permanecerán en
  el anonimato. Esto significa que en [Resultados](/results) no puedes
  identificar cuales de las personas estudiantes son.

**Cuestionarios privados**
* Solo estudiantes que se tienen registro en tu espacio pueden completar el
  cuestionario. Puedes leer más sobre [personas registradas
  aquí](/learners#registered).
* Cuando se le asigna un cuestionario a una persona estudiante registrada,
  recibe un correo con el enlace al cuestionario. Este enlace es único para cada
  estudiante y ayuda a mantener un registro de quienes realizan el cuestionario
  y sus resultados.

## Agregar pregunta a tu cuestionario {#questions}

Puedes agregar preguntas a tu cuestionario ya sea creándolas manualmente o
importando plantillas listas para usar desde la Biblioteca. [Aprende más sobre
preguntas aquí](/questions).

## Publicar y despublicar cuestionarios {#publish-unpublish}
Publicar un cuestionario significa que lo haces accesible para estudiantes.

Luego puedes despublicar el cuestionario para hacer que sea imposible para
quienes estudian completarlo. Si el cuestionario se despublica, la URL del
cuestionario llevará a una página de error.

:::note \
Si despublicas un cuestionario *mientras* está siendo completado por una persona
estudiante, quien estudia verá un mensaje de error al final del cuestionario
cuando intente enviar sus respuestas, y estas se perderán. \
:::

## Editar cuestionarios {#edit-quizzes}
Puedes editar cualquier cuestionario, esté publicado o despublicado, incluyendo:
- Agregar nuevas preguntas al cuestionario.
- Editar preguntas ya existentes en el cuestionario.
- Reordenar preguntas: el orden de las preguntas que ves en tu espacio es el
  mismo orden en el que se le mostrará a quienes estudian cuando completen el
  cuestionario.
- Eliminar preguntas: una vez eliminada, no hay manera de recuperar una
  pregunta.

:::note \
Si alguna persona estudiante ya ha completado el cuestionario, editar este
cuestionario puede afectar la fiabilidad de [los resultados del
cuestionario](/results). \
:::

## Duplicar un cuestionario {#duplicate-quiz}
Duplicar un cuestionario significa crear una copia exacta de un cuestionario
existente.

Una vez duplicado, el cuestionario original y el nuevo cuestionario son
independientes uno del otro: puedes editar o eliminar uno, el otro no será
afectado. **Los resultados asociados al cuestionario original *no serán* movidos
a la nueva copia del cuestionario**.

Puedes establecer una configuración de privacidad de cuestionario (público o
privado) en el momento del duplicado.


## Eliminar un cuestionario {#delete-quiz}
Eliminar un cuestionario significa que el cuestionario, todas las preguntas
dentro del cuestionario, y cualquier [resultado](/results) asociado con este
cuestionario serán eliminados de tu espacio.

:::warning Eliminar un cuestionario es permanente: ¡una vez eliminado, el
cuestionario y sus resultados no pueden recuperarse! :::

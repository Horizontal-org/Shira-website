---
id: questions
slug: /questions
sidebar_position: 3
description: Learn how to create and customize quiz questions in Shira — including preferences, apps, content, and explanations — to teach learners how to identify phishing attempts.

---

# Preguntas

Las preguntas de los cuestionarios son donde ocurre el aprendizaje sobre Shira.
Aquí es donde muestras a tus estudiantes un email o mensaje, y les preguntas:
¿esto parece phishing?

Cada pregunta está compuesta por varios elementos:
* [Las preferencias de la pregunta](#preferences)
* [Una app](#app)
* [El contenido de la pregunta](#content)
* [Variables](#variables)
* [Explicaciones](#explanations)

## Crear una pregunta {#create}
Para crear preguntas y añadirlas a to cuestionario, tienes dos opciones:
1. Puedes crear preguntas desde cero y configurar tú cada uno de los componentes
   de las preguntas.
2. Puedes importar preguntas predefinidas desde la Biblioteca. Si sacas una
   pregunta de la Biblioteca, puedes usarla tal cual es o adaptarla a tu
   contexto y necesidades específicas.

## Preferencias de las preguntas {#preferences}
Al crear una pregunta, debes:
- Nombrar la pregunta: este nombre, como "Invitación a conferencia" o
  "Notificación de inicio de sesión sospechoso", te ayuda a reconocer las
  preguntas que hayas creado. El nombre de una pregunta solo es visible para las
  personas admins del espacio; quienes estudian nunca lo ven mientras completan
  un cuestionario.
- Dile a Shira si el correo o mensaje que estás creando es **phishing** o
  **legítimo**. Esto permitirá a Shira determinar si la respuesta de una persona
  usuaria es correcta.

## Una app {#app}
Una *app* es una interfaz que se ve exactamente igual a la app o plataforma real
que tus estudiantes usan cotidianamente: Gmail, Outlook, SMS, WhatsApp, etc.

Con apps, Shira muestra un correo o mensaje exactamente como sería en la vida
real. Esto significa que cuando se enfrenten a un ataque de phishing en la
realidad, tus estudiantes tendrán más probabilidades de identificar señales de
que es phishing.

Actualmente, Shira admite las siguientes apps:
- Gmail
- Outlook
- SMS
- WhatsApp
- Facebook Messenger
- App de Citas

:::note ¡[Déjanos saber](/contact) si tu equipo depende de apps que no están en
esta lista y que te gustaría ver en Shira! :::

## El contenido de la pregunta {#content}
El contenido de una pregunta son el correo o mensaje reales que redactas para
mostrar en la pregunta del cuestionario.

Esto puede incluir cualquier elemento que normalmente sea parte de correos o
mensajes en la vida real: texto, imágenes, archivos adjuntos, enlaces, etc.

## Explicaciones {#explanations}
La explicaciones son textos breves que puedes crear para explicar a tus
estudiantes por qué el correo o mensaje en la pregunta puede o no ser un ataque
de phishing. La explicaciones se mostraran después de que una persona estudiante
responda a una pregunta, y resaltan elementos específicos en la pregunta.

Cuando creas una pregunta, cada explicación debe estar enlazada a un elemento en
la pregunta, como:
- El nombre del remitente
- El correo electrónico o número de teléfono del remitente
- Palabras específicas, oraciones, o imágenes dentro de un correo o mensaje.
- Imágenes o archivos adjuntos

El orden de las explicaciones que ves cuando creas las preguntas es el mismo
orden en el cual se presentan las preguntas a quienes estudian durante el
cuestionario.

## Variables {#variables}
Las variables son marcadores que puedes utilizar para insertar información
personalizada dentro de una pregunta.

Para añadir una variable, escribe lo siguiente en el contenido de la pregunta:
* ``{{name}}`` mostrará el nombre de quien estudia
* ``{{email}}`` mostrará el correo electrónico de quien estudia

Las variables funcionan un poco diferente en cuestionarios públicos y privados:
* En cuestionarios públicos, el nombre y correo electrónico mostrados son
  tomados de lo que la persona estudiante introdujo o son auto-generados durante
  la configuración del cuestionario.
* En cuestionarios privados, el nombre y correo electrónico mostrados son
  tomados de la información de quien aprende como fueron configurados cuando se
  le invitó al Espacio.


# CAL - Computer Aided Levitation

Levitation mécanique.

Mechanical levitation.

Lévitation mécanique est un dispositif permettant à son utilisateur de s'élever lorsqu'il atteint l'état méditatif.

Mechanical levitation is a device allowing the user to get up when he reach a meditative state.

Après avoir mis un capteur eeg (electroencephalograme) sur sa tête il s'asseoit sur une plateforme qui lorsque ses ondes cérebrales indiquent un état de méditation s'éleve grace à un moteur placé en dessous.

After putting on his head an eeg sensor he sit down on a plateform wich moves up when his cerebral waves reach a méditative state, thanks to a motor place under the plateform.

Afin de réaliser cela les données du capteur eeg sont transmises via bluetooth et le protocole tcp/ip à un ordinateur sur lequel Touchdesigner (logiciel) est installé.
Touchdesigner récupère les données et en extrait les données des ondes cérebrales relatives à l'état méditatif.
En cas de mauvais positionnement du casque sur la tête de l'utilisateur une led en face de lui s'allume.

In order to achieve this, eeg sensor datas are send through bluetooth and tcp/ip protocole to a computer wich runs Touchdesigner (software).
Touchdesigner retrieve the datas and parse them to extract meditatif waves.
If the eeg sensor is not correctly worn by the user a led lights up in front of him.

Un vidéoprojecteur connecté à l'ordinateur projette les ondes cérébrales de l'utilisateur derrière lui. 

A videoprojector connected to the computer project the cerebrals waves of the user behind him.

Trois status sont possibles. 

1 - L'utilisateur n'est pas du tout dans un état méditatif, le siege descend.
2 - L'utilisateur est dans un entre deux, le siege ne bouge pas.
3 - L'utilisateur est dans un état méditatif, le siege monte.

Three states are possible :
1 - The user isn't at all in a meditative state, the plateform moves down.
2 - The user is in an in-between stage, the plateform doesn't move.
3 - The user is in a meditativ state, the plateform goes up.

In order to active the plateform to goes up or down, un rasberry connected to a relay card receive  with the OSC protocol (through a node.js server) the data extract and processed by Touchdesigner.

Afin d'activer dans un sens ou l'autre le moteur, un raspberry connecté à une carte relai reçoit par le protocole osc (au travers d'un serveur node.js) les données extraites et traités par Touchdesigner.
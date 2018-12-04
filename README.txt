# CAL - Computer Aided Levitation


Mechanical levitation.


Mechanical levitation is a device allowing the user to get up when he reach a meditative state.

After putting on his head an eeg sensor he sit down on a plateform wich moves up when his cerebral waves reach a méditative state, thanks to a motor place under the plateform.


In order to achieve this, eeg sensor datas are send through bluetooth and tcp/ip protocole to a computer wich runs Touchdesigner (software).
Touchdesigner retrieve the datas and parse them to extract meditatif waves.
If the eeg sensor is not correctly worn by the user a led lights up in front of him.


A videoprojector connected to the computer project the cerebrals waves of the user behind him.

Three states are possible :
1 - The user isn't at all in a meditative state, the plateform moves down.
2 - The user is in an in-between stage, the plateform doesn't move.
3 - The user is in a meditativ state, the plateform goes up.

In order to active the plateform to goes up or down, un rasberry connected to a relay card receive  with the OSC protocol (through a node.js server) the data extract and processed by Touchdesigner.


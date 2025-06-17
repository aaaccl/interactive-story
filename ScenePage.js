{\rtf1\ansi\ansicpg950\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ Button \} from "@/components/ui/button";\
import \{ useState \} from "react";\
\
const scenes = \{\
  s1: \{\
    text: "Rose proposed creating an anonymous message wall during Mental Health Week.",\
    choices: [\
      \{ label: "Jack agreed to film.", next: "s1_a" \},\
      \{ label: "Jack decided to observe silently.", next: "s1_b" \},\
      \{ label: "Jack ignored the idea.", next: "s1_c" \}\
    ]\
  \},\
  s1_a: \{\
    text: "Jack filmed in front of the wall but Rose rejected him.",\
    choices: [\
      \{ label: "He decided to upload the video anonymously.", next: "s1_a1" \},\
      \{ label: "He deleted the video and wrote: I'm willing to relearn to listen", next: "s6" \}\
    ]\
  \},\
  s1_a1: \{\
    text: "Jack anonymously posted the video. It went viral and sparked controversy.",\
    choices: [\
      \{ label: "Jack continued releasing edited clips", next: "s7" \},\
      \{ label: "Jack deleted it and apologized", next: "s10" \},\
      \{ label: "Jack wrote: I'm willing to relearn to listen", next: "s6" \},\
      \{ label: "Jack messaged Rose privately", next: "s1_a1_b2" \}\
    ]\
  \},\
  s1_a1_b1: \{\
    text: "Jack explained it was meant for reflection. Some accepted, others criticized.",\
    choices: [\
      \{ label: "People accepted his apology.", next: "s14" \},\
      \{ label: "Some remained angry.", next: "s10" \}\
    ]\
  \},\
  s1_a1_b2: \{\
    text: "Jack apologized to Rose privately. They reflected on boundaries.",\
    choices: [\
      \{ label: "Rose said: 'Some emotions aren't for publication.'", next: "s14" \}\
    ]\
  \},\
  s1_b: \{\
    text: "Jack observed from a distance and noticed a mysterious figure, Lorre.",\
    choices: [\
      \{ label: "Jack mimicked Lorre's posture in psychoanalysis videos.", next: "s1_b1" \},\
      \{ label: "Jack avoided her and focused on the wall.", next: "s1_b2" \}\
    ]\
  \},\
  s1_b1: \{\
    text: "Jack's videos gained traction. He said: I hear you and myself too.",\
    choices: [\
      \{ label: "He continued posting.", next: "s14" \}\
    ]\
  \},\
  s1_b2: \{\
    text: "Jack noticed emotional notes disappearing silently.",\
    choices: [\
      \{ label: "He decided to investigate.", next: "e3" \}\
    ]\
  \},\
  s1_c: \{\
    text: "The school launched an Emotional Safety Integration Policy grading messages.",\
    choices: [\
      \{ label: "Jack contacted Rose.", next: "s1_c1" \},\
      \{ label: "Jack remained uninvolved.", next: "bad" \},\
      \{ label: "Jack hesitated.", next: "s1_c2" \}\
    ]\
  \},\
  s1_c1: \{\
    text: "Jack and Rose opposed the policy together.",\
    choices: [\
      \{ label: "They wrote a joint post.", next: "s14" \}\
    ]\
  \},\
  s1_c2: \{\
    text: "Jack considered anonymous resistance or silence.",\
    choices: [\
      \{ label: "He posted anonymously.", next: "s14" \},\
      \{ label: "He stayed silent.", next: "bad" \}\
    ]\
  \},\
  s6: \{\
    text: "Rose discovered emotional expressions were being removed.",\
    choices: [\
      \{ label: "She reminded everyone that expression can vanish", next: "s14" \},\
      \{ label: "She posted: Which emotion isn't worth keeping?", next: "s14" \},\
      \{ label: "She recorded all the deleted notes", next: "s6_alt" \}\
    ]\
  \},\
  s6_alt: \{\
    text: "Rose showed the removals at an assembly.",\
    choices: [\
      \{ label: "Audience applauded.", next: "s15" \},\
      \{ label: "Some called her manipulative.", next: "s9" \}\
    ]\
  \},\
  s7: \{\
    text: "Jack edited clips to mislead the public about Rose.",\
    choices: [\
      \{ label: "Rose wrote a long article.", next: "s8" \},\
      \{ label: "Rose stayed silent.", next: "s9" \},\
      \{ label: "Rose confronted Jack.", next: "s7_alt" \}\
    ]\
  \},\
  s7_alt: \{\
    text: "Rose asked: 'Is this your truth or your edit?'",\
    choices: [\
      \{ label: "Jack said: 'Both.'", next: "s8" \},\
      \{ label: "Jack remained silent.", next: "s9" \}\
    ]\
  \},\
  s8: \{\
    text: "Online users questioned Rose's legitimacy.",\
    choices: [\
      \{ label: "Jun posted a resonating painting.", next: "s14" \}\
    ]\
  \},\
  s9: \{\
    text: "Jun anonymously posted artwork, noticed by Rose and Jack.",\
    choices: [\
      \{ label: "Jun posted again.", next: "s14" \},\
      \{ label: "Jun tore up the artwork.", next: "bad" \}\
    ]\
  \},\
  s10: \{\
    text: "Jack received an anonymous note: Some people sell silence.",\
    choices: [\
      \{ label: "He investigated the cameras.", next: "e3" \},\
      \{ label: "He replied: I hear you and myself too.", next: "s14" \},\
      \{ label: "He reflected more deeply.", next: "s10_b" \}\
    ]\
  \},\
  s10_b: \{\
    text: "Jack read another note: Silence is never neutral.",\
    choices: [\
      \{ label: "He released full recordings.", next: "e2" \},\
      \{ label: "He returned to the wall.", next: "s13" \}\
    ]\
  \},\
  e1_b: \{\
    text: "A debate started: Does anonymous expression amplify or distort?",\
    choices: [\
      \{ label: "Jack released raw footage.", next: "e2" \},\
      \{ label: "He stopped posting.", next: "s13" \}\
    ]\
  \},\
  e2: \{\
    text: "School introduced surveillance updates. Some protested.",\
    choices: [\
      \{ label: "Rose protested.", next: "s14" \},\
      \{ label: "Jun created resistance artwork.", next: "s14" \}\
    ]\
  \},\
  e3: \{\
    text: "Jack discovered the wall was monitored.",\
    choices: [\
      \{ label: "He stopped publishing.", next: "s13" \},\
      \{ label: "He posted: 'I'll listen, will you speak?'", next: "s14" \}\
    ]\
  \},\
  s13: \{\
    text: "Rose sat at the wall: You don\'92t need to speak, but I\'92ll listen.",\
    choices: [\
      \{ label: "She closed comments.", next: "original" \},\
      \{ label: "She placed a recorder.", next: "s14" \}\
    ]\
  \},\
  s14: \{\
    text: "The mood turned to collective listening.",\
    choices: [\
      \{ label: "Go to the closing ceremony.", next: "s15" \}\
    ]\
  \},\
  s15: \{\
    text: "Rose shared her experience. Jack did not record again.",\
    choices: [\
      \{ label: "End.", next: "good" \}\
    ]\
  \},\
  good: \{\
    text: "The wall became a space for emotional expression.",\
    choices: [ \{ label: "Restart", next: "s1" \} ]\
  \},\
  bad: \{\
    text: "The school dismantled the wall; expression was suppressed.",\
    choices: [ \{ label: "Restart", next: "s1" \} ]\
  \},\
  original: \{\
    text: "Rose shared her original intent. Jack didn\'92t press record.",\
    choices: [ \{ label: "Restart", next: "s1" \} ]\
  \}\
\};\
\
const ScenePage = () => \{\
  const [sceneId, setSceneId] = useState("s1");\
  const scene = scenes[sceneId];\
\
  const handleChoice = (nextSceneId) => \{\
    setSceneId(nextSceneId);\
  \};\
\
  return (\
    <div className="min-h-screen flex flex-col justify-center items-center bg-white p-6">\
      <h1 className="text-xl font-semibold mb-6 text-center max-w-xl">\{scene.text\}</h1>\
      <div className="flex flex-col space-y-4">\
        \{scene.choices.map((choice, index) => (\
          <Button\
            key=\{index\}\
            className="text-base px-6 py-2 rounded-2xl shadow-md"\
            onClick=\{() => handleChoice(choice.next)\}\
          >\
            \{choice.label\}\
          </Button>\
        ))\}\
      </div>\
    </div>\
  );\
\};\
\
export default ScenePage;\
}
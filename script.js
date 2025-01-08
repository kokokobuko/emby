{\rtf1\ansi\ansicpg936\cocoartf2820
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw16840\paperh23820\margl1440\margr1440\vieww28600\viewh14600\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.getElementById("login-form").addEventListener("submit", async (event) => \{\
  event.preventDefault();\
\
  const serverUrl = document.getElementById("server-url").value;\
  const username = document.getElementById("username").value;\
  const password = document.getElementById("password").value;\
\
  try \{\
    // \uc0\u30331 \u24405 Emby\u26381 \u21153 \u22120 \
    const response = await fetch(`$\{serverUrl\}/Users/AuthenticateByName`, \{\
      method: "POST",\
      headers: \{ "Content-Type": "application/json" \},\
      body: JSON.stringify(\{ Username: username, Pw: password \})\
    \});\
\
    if (!response.ok) \{\
      throw new Error("\uc0\u26080 \u27861 \u36830 \u25509 \u21040 \u26381 \u21153 \u22120 \u65292 \u35831 \u26816 \u26597 \u36755 \u20837 \u20449 \u24687 \u12290 ");\
    \}\
\
    const data = await response.json();\
    const token = data.AccessToken;\
\
    document.getElementById("results").innerHTML = `\
      <p>\uc0\u36830 \u25509 \u25104 \u21151 \u65281 </p>\
      <p>Token: $\{token\}</p>\
    `;\
  \} catch (error) \{\
    document.getElementById("results").innerHTML = `<p style="color: red;">\uc0\u38169 \u35823 : $\{error.message\}</p>`;\
  \}\
\});}
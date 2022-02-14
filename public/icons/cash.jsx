import * as React from "react"

function Cash(props) {
  return (
    <svg
      width={35}
      height={35}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5 21.875a4.375 4.375 0 100-8.75 4.375 4.375 0 000 8.75z"
        fill="#287562"
      />
      <path
        d="M0 8.75a2.188 2.188 0 012.188-2.188h30.625A2.187 2.187 0 0135 8.75v17.5a2.188 2.188 0 01-2.188 2.188H2.189A2.188 2.188 0 010 26.25V8.75zm6.563 0a4.375 4.375 0 01-4.375 4.375v8.75a4.375 4.375 0 014.374 4.375h21.875a4.375 4.375 0 014.375-4.375v-8.75a4.375 4.375 0 01-4.374-4.375H6.563z"
        fill="#287562"
      />
    </svg>
  )
}

export default Cash

import * as React from "react"

function CreditCard(props) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 8a4 4 0 014-4h24a4 4 0 014 4v2H0V8zm0 6v10a4 4 0 004 4h24a4 4 0 004-4V14H0zm6 4h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2a2 2 0 012-2z"
        fill="#287562"
      />
    </svg>
  )
}

export default CreditCard

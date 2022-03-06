import * as React from "react"

function Emoney(props) {
  return (
    <svg
      width={29}
      height={29}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.833 4.833H9.68V2.417H2.417v7.25h2.416V4.833zm0 14.5H2.417v7.25h7.262v-2.416H4.833v-4.834zm19.334 4.834h-4.834v2.416h7.25v-7.25h-2.416v4.834zM19.333 4.833h4.834v4.834h2.416v-7.25h-7.25v2.416z"
        fill={props.color}
      />
      <path
        d="M6.042 13.292h7.25v-7.25h-7.25v7.25zm2.416-4.834h2.417v2.417H8.458V8.458zm-2.416 14.5h7.25v-7.25h-7.25v7.25zm2.416-4.833h2.417v2.417H8.458v-2.417zm14.5-12.083h-7.25v7.25h7.25v-7.25zm-2.416 4.833h-2.417V8.458h2.417v2.417zm-4.822 4.833h2.417v2.417H15.72v-2.417zm2.417 2.417h2.417v2.417h-2.417v-2.417zm2.417 2.417h2.416v2.416h-2.416v-2.416zm0-4.834h2.416v2.417h-2.416v-2.417z"
        fill={props.color}
      />
    </svg>
  )
}

export default Emoney

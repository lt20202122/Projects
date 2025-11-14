"use client"
import ReactCookieBot from 'react-cookiebot'

const domainGroupId = 'fbe056a0-56a3-4b06-a224-9da3aadb0e34'

export default function CookieBot() {
  return (
    <ReactCookieBot domainGroupId={domainGroupId}/>
  )
}
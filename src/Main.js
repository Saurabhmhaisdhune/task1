import React from 'react'
import Free from './Free'
import Plus from './Plus'
import Pro from './Pro'
import './App.css';

export default function Main() {
  return (
    <section class="pricing py-5">
  <div class="container">
    <div class="row">
        <Free />
        <Plus />
        <Pro />
    </div>
  </div>
</section>
  )
}

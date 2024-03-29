import React from 'react';
export default () =>

<svg id="animation" width="80" height="80" viewBox="0 0 400 400" xmlns="https://www.w3.org/2000/svg">
    <svg id="spat-logo">
      <line x1="160" y1="200" x2="200" y2="160" stroke-width="4"  stroke="#1a9ed9" stroke-opacity=".5" >
        <animate attributeName="stroke-opacity"
          begin="500ms" dur="10s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </line>
      <line x1="160" y1="200" x2="200" y2="200" stroke-width="4"  stroke="#1a9ed9" stroke-opacity=".5" >
        <animate attributeName="stroke-opacity"
          begin="800ms" dur="10s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </line>
      <line x1="160" y1="200" x2="200" y2="200" stroke-width="4"  stroke="#1a9ed9" stroke-opacity=".5" >
        <animate attributeName="stroke-opacity"
          begin="300ms" dur="10s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </line>
      <line x1="160" y1="200" x2="200" y2="240" stroke-width="4"  stroke="#1a9ed9" stroke-opacity=".5" >
        <animate attributeName="stroke-opacity"
          begin="500ms" dur="10s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </line>

      <line x1="200" y1="160" x2="240" y2="180" stroke-width="4"  stroke="#1a9ed9" stroke-opacity=".5" >
        <animate attributeName="stroke-opacity"
          begin="300ms" dur="10s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </line>
      <line x1="200" y1="160" x2="240" y2="220" stroke-width="4"  stroke="#1a9ed9" stroke-opacity=".5" >
        <animate attributeName="stroke-opacity"
          begin="300ms" dur="10s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </line>

      <line x1="200" y1="200" x2="240" y2="180" stroke-width="4"  stroke="#1a9ed9" stroke-opacity=".5" >
        <animate attributeName="stroke-opacity"
          begin="800ms" dur="10s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </line>
      <line x1="200" y1="200" x2="240" y2="220" stroke-width="4" stroke="#1a9ed9" stroke-opacity=".5" >
        <animate attributeName="stroke-opacity"
          begin="500ms" dur="10s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </line>

      <line x1="200" y1="240" x2="240" y2="180" stroke-width="4" stroke="#1a9ed9"stroke-opacity=".5" >
        <animate attributeName="stroke-opacity"
          begin="800ms" dur="10s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </line>
      <line x1="200" y1="240" x2="240" y2="220" stroke-width="4" stroke="#1a9ed9"stroke-opacity=".5" >
        <animate attributeName="stroke-opacity"
          begin="300ms" dur="10s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </line>

      <circle cx="160" cy="200" r="12.5" stroke-width="4"></circle>
      <circle cx="200" cy="160" r="12.5" stroke-width="4"></circle>
      <circle cx="200" cy="200" r="12.5" stroke-width="4"></circle>
      <circle cx="200" cy="240" r="12.5" stroke-width="4"></circle>
      <circle cx="240" cy="180" r="12.5" stroke-width="4"></circle>
      <circle cx="240" cy="220" r="12.5" stroke-width="4"></circle>

      <circle id="inner" cx="160" cy="200" r="7.5" fill-opacity=".5" fill="#fff">
          <animate attributeName="fill-opacity"
          begin="100ms" dur="3s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle id="inner" cx="200" cy="160" r="7.5" fill-opacity=".5" fill="#fff">
          <animate attributeName="fill-opacity"
          begin="300ms" dur="3s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle id="inner" cx="200" cy="200" r="7.5" fill-opacity=".5" fill="#fff">
          <animate attributeName="fill-opacity"
          begin="600ms" dur="3s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle id="inner" cx="240" cy="180" r="7.5" fill-opacity=".5" fill="#fff">
          <animate attributeName="fill-opacity"
          begin="800ms" dur="3s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle id="inner" cx="240" cy="220" r="7.5" fill-opacity=".5" fill="#fff">
          <animate attributeName="fill-opacity"
          begin="400ms" dur="3s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle id="inner" cx="200" cy="240" r="7.5" fill-opacity=".5" fill="#fff">
          <animate attributeName="fill-opacity"
          begin="500ms" dur="3s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
    </svg>
  </svg>
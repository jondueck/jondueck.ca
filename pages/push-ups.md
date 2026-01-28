---
title: Push-Up Challenge
date: git Last Modified
layout: base.njk
permalink: '/push-ups/'
emoji: 💪
---

<style>
    table {
        width: 100%;
        border: 0 none;
        counter-reset: pushups;
        border-collapse: collapse;
        border-spacing: -1px;

        tr {
            border: 0 none;
            width: 100%;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            @media(min-width: 45rem) {
                grid-template-columns: repeat(10, 1fr);
            }

        }
        td {
            border: 1px solid var(--underline);
            border-collapse: collapse;
            aspect-ratio: 1;
            display: block;
            width: 100%;
            min-width: 100%;
            text-align: center;
            align-content: center;
            position: relative;
            float: left;
            &:before {
                counter-increment: pushups;
                content: counter(pushups) "0";
                font-size: smaller;
                color: var(--underline);
                position: absolute;
                right: 0.5ch;
                top: 0.5ch;
            }
            &:not(:empty) {
                color: transparent;
                &:after {
                    /* background-image: url('/src/img/favicons/favicon.svg'); */
                    height: 65%;
                    width: 65%;
                    aspect-ratio: 1;
                    display: block;
                    content: '';
                    z-index: 100;
                    position: absolute;
                    top: 17.5%;
                    left: 17.5%;
                    transform: rotate(15deg);
                    background-color: var(--secondary-color);
                    border-radius: 100%;
                    box-shadow: 1px 1px 2px black;

                }
                &:before {
                    color: var(--body-color);
                }
            }
            &:nth-of-type(even):not(:empty):after {
                border-radius: 0.25em;
                background-color: var(--primary-color);
                transform: rotate(-5deg);
            }

        }
    }
</style>

<h1 class="wrap">JON’S PUSH-UP CHART</h1><br><br>

<div class="wrap">

|   |   |   |   |   |   |   |   |   |   |
| - | - | - | - | - | - | - | - | - | - |
|   |   |   |   |   |   |   |   |   |   |
|   |   |   |   |   |   |   |   |   |   |
|   |   |   |   |   |   |   |   |   |   |
|   |   |   |   |   |   |   |   |   |   |
|   |   |   |   |   |   |   |   |   |   |
|   |   |   |   |   |   |   |   |   |   |
|   |   |   |   |   |   |   |   |   |   |
|   |   |   |   |   |   |   |   |   |   |
|   |   |   |   |   |   |   |   |   |   |
|   |   |   |   |   |   |   |   |   |   |

</div>
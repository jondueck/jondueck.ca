---
title: Push-Up Challenge
date: git Last Modified
layout: base.njk
permalink: '/push-ups/'
emoji: 💪
eleventyExcludeFromCollections: true
redirect_from: /pushups/
---

<style>
    body {
        --yellow: #cc973d;
        --yellow: color-mix(in srgb, #E0B55C, #F2B705);
        --red: #a2310c;
        --red: #C54B2E;
        --purple: #662748;
        --purple: #7A3A66;
        --navy: color-mix(in srgb, #0e233c, var(--secondary-color));
        --navy: color-mix(in srgb, var(--black) 75%, var(--secondary-color));
        --orange: #c7672c;
        --orange: #D87A43;
        --green: color-mix(in srgb, #507522, var(--primary-color));
        --green: #6F8C4A;
        --green: color-mix(in srgb, var(--primary-color), #6f8c4a);
        --pink: #D14B6A;
    }  

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

            &:nth-of-type(even) td {
                &:nth-of-type(n + 1):not(:empty):after {
                    background-color: var(--orange);
                }
                &:nth-of-type(2n + 1):not(:empty):after {
                    background-color: var(--yellow);
                }
                &:nth-of-type(3n + 1):not(:empty):after {
                    background-color: var(--red);
                }
                &:nth-of-type(4n + 1):not(:empty):after {
                    background-color: var(--pink);
                }
                 &:nth-of-type(5n + 1):not(:empty):after {
                background-color: var(--navy);
                }
                &:nth-of-type(6n + 1):not(:empty):after {
                    background-color: var(--green);
                }
                &:nth-of-type(7n + 1):not(:empty):after {
                    background-color: var(--purple);
                }
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
                    height: 75%;
                    aspect-ratio: 1;
                    display: block;
                    content: '';
                    z-index: 100;
                    position: absolute;
                    top: 12.5%;
                    left: 12.5%;
                    transform: rotate(15deg);
                    background-color: var(--secondary-color);
                    border-radius: 100%;
                    box-shadow: 1px 1px 2px black;


                    &:nth-of-type(6n) {
                        background-color: var(--purple);
                    }

                }
            }
            &:nth-of-type(n + 1):not(:empty):after {
                background-color: var(--navy);
            }
            &:nth-of-type(2n + 1):not(:empty):after {
                background-color: var(--green);
            }
            &:nth-of-type(3n + 1):not(:empty):after {
                background-color: var(--purple);
            }
            &:nth-of-type(4n + 1):not(:empty):after {
                background-color: var(--orange);
            }
            &:nth-of-type(5n + 1):not(:empty):after {
                background-color: var(--yellow);
            }
            &:nth-of-type(6n + 1):not(:empty):after {
                background-color: var(--red);
            }
            &:nth-of-type(7n + 1):not(:empty):after {
                background-color: var(--pink);
            }

        }
    }
    
</style>

<h1 class="wrap">JON’S PUSH-UP CHART</h1><br><br>

<div class="wrap">

|   |   |   |   |   |   |   |   |   |   |
| - | - | - | - | - | - | - | - | - | - |
| 01 Feb | 01 Feb | 01 Feb | 01 Feb | 02 Feb | 02 Feb | 02 Feb | 02 Feb | 03 Feb | 03 Feb |
| 03 Feb | 03 Feb | 03 Feb | 03 Feb |   |   |   |   |   |   |
|   |   |   |   |   |   |   |   |   |   |
|   |   |   |   |   |   |   |   |   |   |
|   |   |   |   |   |   |   |   |   |   |
|   |   |   |   |   |   |   |   |   |   |
|   |   |   |   |   |   |   |   |   |   |
|   |   |   |   |   |   |   |   |   |   |
|   |   |   |   |   |   |   |   |   |   |
|   |   |   |   |   |   |   |   |   |   |

</div>
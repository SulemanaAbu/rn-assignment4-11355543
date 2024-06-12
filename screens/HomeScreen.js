import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FeaturedJobs from '../components/FeaturedJobs';
import PopularJobs from '../components/PopularJobs';

const HomeScreen = ({ route }) => {
    const { name, email } = route.params;

    const featuredJobsData = [
        { id: 1, title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana' },
        { id: 2, title: 'Backend Developer', company: 'Google', salary: '$150,000', location: 'New York, US' },
        { id: 3, title: 'Frontend Developer', company: 'Amazon', salary: '$140,000', location: 'Seattle, US' },
        { id: 4, title: 'Data Scientist', company: 'Microsoft', salary: '$160,000', location: 'Redmond, US' },
        // Add more jobs as needed
    ];

    const popularJobsData = [
        { id: 1,
            title: 'Jr Executive',
            company: 'Burger King',
            salary: '$96,000/y',
            location: 'Los Angeles, US',
            logo: 'data:image/png;base64,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',
        },
        { id: 2,
            title: 'Product Manager',
            company: 'Beats',
            salary: '$84,000/y',
            location: 'New Jersey, US',
            logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEX////sGyPrHCTrFx/85+fvX2TrDxf4w8TtMDjrFR7rERv++fnrGiH1vsD+/PzrABH99vb88PD65OX63N34x8ntaG3qJzDrAAr41tj0ubvuSlHrMjr77OzzrbD1tbfxmJvufYH3zM3ypqnykZXsO0HrR03tV1zyh4vtc3fvd3vsa3DxoKPuUljrIirxk5bwiI3sO0BJOwIhAAAPsElEQVR4nO1dCXviLBctoChIxbjEuBs1WpfU/v9f94VE37ENSbhZtP2enGem05mOgRPgcjcub281atSoUaNGjRo1atSoUaNGjRo1avwfott5dQ+qQNeaD9zhZLHYBDifgy+LScsd9Oe9V/esDFjO5Hw9jS67tu1j5PvYxwp2ezfdj9arhdvvvrqLudGbDzfr/QxLKSnnnBGBUPQr+CIE4ZwGPxHt6Wn13u/9OZ7dweIQsGOcoAeIx78gjLBAiqmwp8ez2/9bK3R+JIwwxQhj9BMBL3Hnq34sCON4tl+/z1/dbQAaTfpISE1LIeJMH74nXPLZaPlnRvKRYRZuI42RCIZyeh1ar+68EQKGGMUGLRWKIxI8GMjzX9hFQoZAROsSMSp318Gvl615GN4pYszI7tP55RxzMUSRVFLTlZPdtfFqEqnIy/CGQPDwsX3tv5pGBK0uXZChmqyIEW/xG3ZIZ+Vo/rUYQxFRJNwfvT+d0A/MVz7WdaLwGEYcBaVr3Qt8HlojzNstzQ/KYBiCseniddtjZ9FmiFXJUD2D+ddXrUanyZnApNoxDEDodPmKzbHzviNq86qS4V3tY/b5+cpqb/XFws25+jFUFP3js/f//lTysO3qGUZOAdp2n0qwtaciFANPGcOQI90tnrgYJzt2XyLPmaWBJSZYe/Usft1FMEPv/X8Ow0jFGa+fI296K5s/tPwMhkKZHEFTaP0UebP1yUPnnzWG4WokZFT9WrQOY3FrL2JYqU4TYzneV62mztdYfHOSPZdhsDM2K6Z4CBbDt64/m6EgzSr9jZ3V+D9X7gsYRstDnqoz/Ttnm/0g+PQxVM2vK7M1Nm2C0I+OP1nShFMIHyoiOMQ8eoevYxiByHMlm4Z7obERfA1DxGbLCgg2RkJD8DUMEfHKtzQ6TUowjkcinqfTPLQpBJ+VLlA3XB9neQHDUNrQdcn+KXfH9c29YgyVaSrsTakE+3ue0OFXMAzB7GGZDNckqaGXMUTsUqK12EoOdr6KYfB0uiptV3S85JD1ixiqN87ssoIaveQ5asbwp7ZeFkXeLMnkn9gkeTwMx1Dgf2kn+JZjUpi2ENtSCFpfCRuFCUNxi5QpRoyp1CjO7wlSOhUJBMxYGeZwdyXTumIwhlgly1Dmz7zLSKHZ9L5sHPAU93HNNZbqQ/JYwr7vePw2EnCGIopzSmrvt4v3/qBhRWj03eVns83HlItCA8nsSWGC1pGnzqZUhhgRhmajT1drslrO5uhhlrYGMsEvhfXTd2X1onjGVjZDpIav3Vy5KRtzz9l87BgrIHFwYUf4KOMVpzAk0h+15lm7suWsZ5Qp8ZpjumLEvYIrscVFesOJDCWZbQ0lXWMzRdGWCx3MoG/yXIig9SGz2khiaB+H5kqVs93xlE03EcEboftCK3E4y5IDCQzn2wVIL+64F5pH5ART218UIGidONLY9QYMc2BxSTCyM8CKiFN3lqKRls3wbdAUBIO3Ryz8ArbwIdwpshiWlrbUuKIkQzsZAvF9biuqb2cOYcCwNBsmwLLNUYbw1nDkuWfRxiCTuVyGKn6OgJsGRvKQM1jTGBlYsSUzDCiaJ4jfwac5TYx3m2Wve1yepR3BDUcRBIHzefl7BxO9v+wxvE9UEMgol1OqcTFpqXyGb5M2y9iEf4LPcjn5l75JQyXuh/9hgZiaPACWLJc744OZyG0Iw15j4LiuM+hnzakDdJ7yaY6F2PtiJhuTMcPGZHvae7vZbOddTtfJIO3/9vcM5MQJ5loOaepKo1lixLDbX1z88VhyzhQ4lWPmrZxkyw4sUMc5bKiVNHqJJgwHW49EmX63R6o0Nc5nazdpbnXPymozX4hYHsGbvnUyc1pn66Xzlcf57bThw+fU8Z/ZIWlydYAbfw5/jbMzWoaZu0XnvT1Whp/2YUTiTcJUHbazdeI71JvzwXuWcnSbzJIMhvOtHfnqEg4fcrzWy5zeGrISMSLQME13RcyEWTrD+QinOdLUzCVTPUV3ZjaJ0C2GcQKqNVaWj82IoTuV9x4kg870D9hKwIaBmQdciP2kqDaEoZMYOY5wY86+tE9wCDEXp1hAQ8JD3/DZKbvF/GLi6sVKrdRO1D3A5Y8FB/oytqbCOpmhdRrrZUwc0tNRnPjm4hRheoIxXJszTJil3Y2fHAt4RBg/PWg2jXkwyY1XIqYXGMO9aZA6kaEL8EcED9GkcXU+DSzwGwTmbZBW02ubiuokhl2VBWeud2lznNwZxA8Oi5b2cUrI8AdD/TpcgrQujOQ2PgQNNU1NJR4ag6zgoZlhkcxwPqIwlxn34kPQWWdFTR4xBgnT5dh0BSQwXPqGOtHtKcHr0AzihBq/JIzHnxCGK2N9Qs/Q+oCFWYQ+/ND3zZTjMJ4Oi+lvzYzDRIYDsL8MCz8uTq0v48cITEcAhp2jsZzQM1yFVi6IYaA7x5/TNI9jYL4HJLhbH9RYhmkZmurt/0FN01ncOjiYB9wwTzBS9AxN/PkpDOegjexOksTF/dnccYp10jgR8wyjIIuhy/Nkych4MHdpm091tgMwbJgzREzjp1lCTLsbgk0/Lu6HBvG9OwjE8T24cPN1qNHazjkYIl2QzJmZO/hBFuJgaswQEU3i1Raii9w7iOlHTNwrf5hxR9owhsY90zDsHPIxjLtaBp4xw2AyAQIoagxN+1UWw8DCG8USYgEMYWOo8hFN+0X8OMNrPoan2JYdMDRWHAhoHYYZl2b9EhpfbK51iPTr0JihAM1Sz1zSIBzXJ1fGpsnjc+Q6Lku/TFVvoCy19uavDqG4XbaUeRIN5TXmtnYBvn3yBdNpzDtG4vHXnDpN/FVNzHUazEAMjWsCBrKUH2Of76dl9yc+SpP4s/GNP44ZRC+1TtJ0+gvMNW48yBy4g7Xj1s/VPH0YZlsA7EOE+C5ueW7z2IejeEcAVhjMPnwz39BEsF3E3Q+tNiDmEHVQ4HiguuMZWwBAG99cdQ4PPcQV0/mIQaSpco4zjWd/js3Xs06tTcFinJU5+wAZT5dXLn1zghFLjWPf3KkZMByDcmpaEjDJdC8vsL9AmQZI6wz5NLfCBBqDziUMsHmWJ+Y649okc/MRUjOEc8ARv8CABkXyrba5toR0fsC3npedX/wAYmvekmPuTFRtwZKGpoDAFuK6DNZF6PU2pcivmk5szBOjAs3DhwXyQT5r/qXZa7tbY3d1IEhPCfFD4z5g7oEIvn0CGAZiQhcUCY8+meT+qbCMzok0BOl+OoUhDUtzoyVUJ3TPcHH6sbfo46oUK9WGjY7m7uDgKQx4xMs4F0MBi7H2GOBwFxYeTFyMtxgl0xcP6AO2e2WIA3MxrCZkISYlzr2bZKfxtj5L+wwyo9kOmE/TO4CsAz7Tv8GhTZPFaZRLwvlGS7B/Md4Mo3Pd0MJDE5jaldRA/+QznDJTCdrrPdWdK+wUFN9Cs4RVqQ9TE1H1VLfrK8zPNtcWtgmVJo6SKlo7gAhkmJsIrskzBy1EJfATkj26raaMzoiix9oDwV8Fl94iKUXkxBFA+UcEEpa5YSthBt44eZq4I5uzfwfwo4P6nPv75BrI5okE0fuSOpUhA+9AjyDR59+FsIZbD1POb0lS6l4SNDtOkqWfcwG6QfLkeQfWp/Hzw46TfUqVik5/cr3YfCxl8Iva3nGRksf+1jvGy6alASOap1jNCOoSpFl6kzVw35fLSWuQJdg/ObBYCNP4irKxANiIIQjZlFPS0LWhmRxsnacdiLxG4aRiCdm+QCj/gACdfErcq9Khcskh3iQl/suoFOdMYRuFYtjMV1BpCQii33Y6Bonh6dG/gE+RIpyznhIkEhw1pE52FCyGNwCn4iAMylH4hhXImyRuOduF6qk48EP5wVaRuzrdADJN72D2JL9EBQSf/0GQ/C+1CV8SQtl7edubpBQVSwbb5S/c1soziIjRZq4r/6wjM3B7/ERgmxWobjIfQbfeUKQKeoHV/QgxPFFyfwSkOaI9ymCKBeTIwwO4fQQ2a21DBQN4xDlkqUkuNgc4XRtFpdmQkO0twHEyX3hS+Z3gBDG/FBnCYNfPUVElKmdM8GVhyHE+HPnRcshTY6hg9cReHvEdNU243zwbuIe6y9OMwaylh3aYX2wIgarbd47q0sbZ+t1KWSZdy716lOZsQoEUrnwNF6cPHDFiHO+3k4FW5+j1W6umzRLP0JpAFzmGYmKDTk7cIe4slUNmOvp8H3zbP6zBcPVxsUV0EyuwgsJDK6KEGqbdq8R5hPgjOB2Pub27fKzXh8NhvW56bSHDkoI3t1S+xwYaab6SHz/Qb4NinT8Qkgg9iYRRKTnnlEqqXG84Vw267w9n5dTk+OQCQy8VjQNHt6lG34XfFH4mzvQMGaJ3yi1s/kFdFSNutVnv9zgUIihUvY+yypbnKPsT5xfVnP13LXCx8QuVCru8G6BW48JdKhtKm/kosdx10zhM8zyAI4apcA2rZDwP+qPDBZDXjKoGSmTxkq8O6H6aJVY8B8E+Q0dlXzZjTX/RICrHbPnXPrVSy3o/FTgwPotVntVjuMvhJyofoWvGroLgW3eBfslEFXRb0QW6R2XrFDQzygCfVnUPYu+AU3OcngQyqu5aMisqefJahrTSCwJ7l6jKwQs5UrvaS2X7TVGs1n9R8GmpF+hoMBjlCZ6UBnopvdJmDPNprmPMxaFWBrWLu9ay0VsLcASlJJBmdVL0EdZW5nIwFgat8PbK7+geeBgnei4/QnNmXOTC4tlquEDcBmeQFkG3dbuZ27ScVGEwOzmRsRo4TcoiipVD6YnUK35lDhS9c5soF2jVFMPjCuhQ2fWxKehO9k/Qb8Jc6d3qiTLmEYMPqbldtmR+gskL4D6XsnH27mm/VXEUZHZ90QBGcNa40n2DsdF7lfdwG6B39mS++2FScJ8XTNrblw5ghPl5RwiCXxCTRjCUYIyBMlaqhHOd0bzJFHqo98X9U+t1EuYHeu6IyJIccSKkRySdTn7BBH2Ae2iHN8QVGkhxS1IlzP94tYCJozu87miumibfEUxP3v74ZeN3Q2dw2EnJxE3qCGAYO0pcIFTaH2kXCr4Yvclph6MzTsA0ktATSziaNRclXRBbFSzn3Jwh/iB2fsTvH37w/WAM4aS9/xz+cn4K3bmzuthUchZmmOBvXG9//qMbHdojXErf2w7nv068JGKwPDR3vmAq6VDc16Vu0gr1f/Bsf1w4v3fx6dFtuJvDaNf2GQ9ohsMWDim+XVWibmFllGN711yvhv0nG/BloWcNWgHNadsXUoHK6A86Dr5yZHv74/ndmff+ztxMQLcxcJeb1fWwVml76vf187wcOo0/z+wnugE6vU630/01+maNGjVq1KhRo0aNGjVq1KhRo8bvwf8AopYcywWnIiwAAAAASUVORK5CYII=',
        },
        { id: 3,
            title: 'Product Manager',
            company: 'Facebook',
            salary: '$86,000/y',
            location: 'New York, US',
            logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAe1BMVEX///8AgP8Abv/m7f8Aev93pf8AeP8AdP/6/P+jw/+QtP93p/8Aff/w9v8Acv+gxf+syv/M4P/V5f99q/+bvv9Jkf/1+f8ziv/p8f+awf/a6P9GjP/G2/8Aa/9Znf9Pj/+x0P+81P8ghP+Ouf9Zmf9qnf97r/9opf+Mr/8jwox5AAAEnElEQVR4nO2da3eqOhBABTGhEBWVl4rKS+3//4UX2nvO0QWVRDIh6Zr92WaxF8kQhsl0NkMQBEEQBEEQBEEQBEEQBEEQBEEQBPlHfMjydeXdfH8xDt/f3apwnWeHeBqTw/58OZZlaTHGnNE0g1jNYMfLeT9XrpJf2BeWVL7HjHKVJm5gUckaT0rUClxVLpvIBlT50rGjjRKVOKAEVqWF0EBBLEg9G16lxfZScBdfkUtj4wPbxD5V5WJZ1IedaZ6C5fIP4kG6BBZwGHuGWQGcyzZS6tLYRFswGbWTrAVuohWl4hvT3JqygHGJPYWR7A/Ug4lom0T5jWluTQKzrwlW6l0sawUS0NKd8uXfQkD2AYcpZlk7zw4AMtkks6yZZ5l8F3eaJdMuGvkvanE1QWBuIQDBeXmfZP03MvelfJmzI+XaGBPMhDi1fJl09CaTMadNJyXHhqQsra8EE8efRfJjczpuY9aIJPVit8+z7TxN59ssr3aLa5Rw/GUJIDNGxSLltSo6F7XcFjwrEUBmxJJxLL9r8k0+HPCJ/BTn/P3HDInyH9cwx9NrBSDzdlaG3F9cDYeMrZEMvb966JklQ+qXw3LInLSRYdbrYY2SoQNx1aRpRtcDwxok40RD+yqDZOhgosgcGacevA5zZFYfg8OaI1MOv74bI0PuL+Oy68ZxvB5+GddDhoY/WISJQxtIA8deXA8Zpz8ZWZ3EvrtrIcOSviUT30WzPHrI9H3Ld8W/8Wgh45x7EquZeJJXD5lrN5i5lXj2TQ+ZRVdm/kb2TVuZ7I2ElbYyxRsJa21l3vmUoK/ML7oz7sdvkglRBmVQRkjmVwUAlJlG5utl+C92d9fshif6jLYyzm79yL7oVCO4m/36+TccNtPIrHLhUdOTtjLi1VQFx8bTGBmNp5m4DE8NmzEyPGUfxsjoG5rfkOEIZsbIpDzbClNkuEolTZHh+KBhjsyNJ79pikzNkxI0RabkcDFFxuXK1Roic9BZJhccM9NYhlbbzSOHbql4un3gUPG4TPXazJ7oOV/hftiPv+By0SOhQfxOFZBJCQ2UQRmUQRmUQRmUQRmUQRlxGeGqF1kyFEBGuOpNlowDcRpQtFJMkgyDOA0oXFwpSyYBkBE+QStLBuAErfjZZkkyzhngoLbwqXNJMhCnzmPhIl5JMrSS3w9AvFODJBmITg3iPTRkyQD00BDvbiJHBqa7yVK074wcGbKTv/5n4jXJcmRgOgLNNoKPTSkyvedWJOAKdtGSIkM9oPaggmdfZMj0n46SgtipJBkygC0OD1xfhyXKsBoiLv9PLnL8ZbwMs3I4l9ksFJhoZNfZVAnKkB8OekoivvE/bEbLrD6BGx0vbzxVVVJkTjeQZ/8jcchrM1LmFCrocewWnP2aR8kQ2q2KBmFec3XSHiHD7OG2CNIoLhxf8d+VaYa+APU1/UnneiyZ87IyQVimHc1h5fGqVqUlDW7X+pIkzXPUIX3Yi65MeOr9KSHffdyi+noL1P9fgO9rm2+KPNiHVeX18Nltue5mn32/bKjC/Tov+sptEARBEARBEARBEARBEARBEARBEAQR5D8RKnQQ27ZTuQAAAABJRU5ErkJggg==',
        },
        { id: 4, title: 'Senior Developer',
            company: 'Tesla',
            salary: '$120,000/y',
            location: 'California, US',
            logo: 'data:image/png;base64,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',
        },
        { id: 5,
            title: 'Designer',
            company: 'Apple',
            salary: '$110,000/y',
            location: 'Cupertino, US',
            logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAACUCAMAAAAH411kAAAAYFBMVEX///8AAAD29vb7+/t7e3va2try8vLq6urv7+/U1NSIiIhKSkqRkZFSUlLl5eWCgoKjo6MLCwu5ubklJSWvr6/MzMyXl5dsbGxkZGRXV1fAwMAZGRk8PDwsLCxCQkIxMTHEMpPSAAAEH0lEQVR4nO2c2ZaqMBBFBQOIzPMM//+XF7WdCA5Naq2T9M1+9qGOkJrDbqfRaDQajUaj0WgUYo82gIyDm8axjbaCBLP1mdcZXYg2hIBDXvXGid5BmyKMGTeZccFTXo1bd8aV+oC2RpA4Me4cTbQ5QhyY8UistJqwfhJjpGiDRFiKMVy0RQLY1UJMZ6FNEuC4EGNUCjvoYinGKNV1Ak7PqWnRNm2HcWI8dY+NNXBqfHVftIgTo3C0CT1OjMIeLe6WYpIcbdN2loFzfjTq5s9WsBQzqHtqdnm2EJMc0SYJUC4fTa2uC9iZS//cqxs4+VIgU1nMzg3+zpOZ0+fxyTcr3kVLH11arm56diF/8MzqN2vji5Jh9NVNAO7kw+gFValyU+OBsLAOqp+W/4e9aZp72YdRppXmcVnGcWq9frMORV5GEYuiyI9zV1a/YKdRFUzdqW3eDUHlt2v/vZNH9Xgr3ZLMq6NUQkFhFCwaGVNTLqN+y7xlbTCXOoEvWXYQ1hNn5fzXT1N+j5Yu63kpP5Eokiio7o/JupknS5tzKuP4fAvq6WfS1KLte0Pnd6n58IMTDVrGGTP+wtRv6CSoR22fSMz8tsFTH5NOzOwF0XIoxcAb7VRn5gpDeuritWfexJQCU22ba2GKUYfIRHRljCECg9ZAxVo2sx0fqWWt8a+wmJT00TCsGNpTU4P7BgU//NvOhK5wKANnkoJ7BA6/ALAdhk6fi09FzS/I4Fsd+Wcjv4ah+xyUlUAHH7aH3xTHXxLAp1Mu4bGJ0GJWts22A85pZlI6MRPco+0JXZqH7gbQtZ1mGnRWszO57YztoBNO2nAjgZq/9Wz+1Ln5Wz6NMunsC7QYyujZxWgxlGoM/B4hZc+2hrsByhwan6hZlB2bEq0mpGx0BmgfbXN3g0SAezXKLgd6pkbrovHXpAr+rpMI4HzAWl53FCPDrqbsaafRxoB916jH0dgyp6U9OHPUQfZvSePnRQ7ST5PGzzMZcI2QuyIkTscK1FiKsrF+oz+6ID3Eyw8/oG4apIQ1zp0c9a4Rr9mcyWDVgU+8AnUigrk1h3bR5gxw95Zyyn4B2fEIydVAq1DqkNNAi1CLVkwC7t7Q1mzoWTvpw+ngjTXKEtSDz6VCuky6k+CeR0umpkZL2XFfERNAilt5FlGDAD4puJByH0TZQoWW8YNJkUv3cH92hfvM2+8Z8KPcG+742d73wNcHHykEo45kX4cUG4DAN4iXiATRGj2M4tn+dNCZ8yqvn87kNU0wvnLjo4xiZs/GW9plUXtrwtht1fGSoKOBd4TBk7HZeFw2x8y4ee7zDPiF25fYpXfNcpK+Wf9yTcFugubfSBQ0VwhjVjdBU7HytZ2H1mdVXb/9jTQ4lmt9PAum40j0SQGNRqPRaDQajUajkYt/7Os7I7kvxhwAAAAASUVORK5CYII=',
        },
        { id: 6,
            title: 'Database Admin',
            company: 'Promolante',
            salary: '$30,000/y',
            location: 'Madina, Ghana',
            logo: 'data:image/jpeg;base64,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',}

    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userEmail}>{email}</Text>
                </View>
                <Image
                    source={require('C:\\Users\\saddi\\WebstormProjects\\rn-assignment4-11355543\\Assignment4\\assets\\profile.jpg')}
                    style={styles.profileImage}
                />
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchBox}>
                    <Icon name="search" size={20} color="#7a7a7a" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search a job or position"
                        placeholderTextColor="#7a7a7a"
                    />
                </View>
                <TouchableOpacity style={styles.filterButton}>
                    <Icon name="filter" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Featured Jobs</Text>
                    <Text style={styles.seeAll}>See all</Text>
                </View>
                <FeaturedJobs jobs={featuredJobsData} />
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Popular Jobs</Text>
                    <Text style={styles.seeAll}>See all</Text>
                </View>
                <PopularJobs jobs={popularJobsData} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 55,
        marginBottom: 20,
    },
    userInfo: {
        width: 254,
        height: 55,
        justifyContent: 'center',
    },
    userName: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    userEmail: {
        fontSize: 19,
        color: '#7a7a7a',
        opacity: 0.7,
    },
    profileImage: {
        width: 54,
        height: 54,
        borderRadius: 27,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 275,
        height: 48,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: '100%',
        fontSize: 16,
        color: '#7a7a7a',
    },
    filterButton: {
        width: 48,
        height: 48,
        backgroundColor: '#7098c4',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        width: 117,
        height: 21,
    },
    seeAll: {
        fontSize: 14,
        color: '#7a7a7a',
        opacity: 0.7,
        width: 42,
        height: 17,
    },
});

export default HomeScreen;

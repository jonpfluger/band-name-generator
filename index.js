import chalkAnimation from "chalk-animation"
import { generateSlug } from 'random-word-slugs'

const length = parseInt(process.argv[2])

const bandName = generateSlug(length, { format: "title" })

chalkAnimation.rainbow(bandName)
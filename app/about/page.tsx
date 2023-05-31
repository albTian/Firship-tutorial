export const dynamic = 'force-static'   // Explicitily tell Next to only render this page staically

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About deez",
    description: "I'm him"
}

const AboutPage = async () => {
    return (
        <main>
            <h1>About</h1>
            <p>One thing about me I'm the baddest alive</p>
        </main>
    )
}

export default AboutPage
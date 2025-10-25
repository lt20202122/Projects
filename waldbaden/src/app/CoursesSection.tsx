import Card from "./Card";

export default function CoursesSection({playfair}:{playfair:any}) {

    return  (
        <div className="w-screen flex justify-center">
            <section className="grid content1:grid-cols-3 w-max gap-10 content2:grid-cols-2 grid-cols-1">
                <Card imageSrc="/wald3.webp" id={0}/>
                <Card imageSrc="/wald4.webp" id={1}/>
                <Card imageSrc="/wald5.webp" id={2}/>
            </section>
        </div>
    )
}
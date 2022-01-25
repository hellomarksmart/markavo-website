import * as React from "react"
import { Link } from "gatsby"

const pageHeading = [
  {
    subheading: "Introducing",
    heading: "JavaScript for Beginners",
    description:
      "Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.",
  },
]
const textContent = [
  {
    heading: "",
    description:
      "Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit viverra aliquam porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum dignissim.",
    subdescription: [
      {
        text: "Quis elit egestas venenatis mattis dignissim.",
      },
      {
        text: "Cras cras lobortis vitae vivamus ultricies facilisis tempus.",
      },
      {
        text: "Orci in sit morbi dignissim metus diam arcu pretium.",
      },
    ],
    figureContent: [
      {
        image: "",
        imageCaption: "",
      },
    ],
    videoContent: [
      {
        link: "",
        videoText: "",
      },
    ],
  },
  {
    heading: "From beginner to expert in 30 days",
    description:
      "Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.",
    subdescription: [
      {
        text: "Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.",
      },
    ],
    figureContent: [
      {
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3",
        imageCaption:
          "Sagittis scelerisque nulla cursus in enim consectetur quam.",
      },
    ],
    videoContent: [
      {
        link: "",
        videoText: "",
      },
    ],
  },
  {
    heading: "Everything you need to get up and running",
    description:
      "Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.",
    subdescription: [
      {
        text: "",
      },
    ],
    figureContent: [
      {
        image: "",
        imageCaption: "",
      },
    ],
    videoContent: [
      {
        link: "https://watch.videodelivery.net/8e908ac501a9266cf0c06dc0278e4b15",
        videoText: "Video",
      },
    ],
  },
]

const TextTemplateSection = () => {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        {pageHeading.map(item => (
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-emerald-600 font-semibold tracking-wide uppercase">
                {item.subheading}
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {item.heading}
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              {item.description}
            </p>
          </div>
        ))}
        <div className="mt-6 text-lg max-w-prose mx-auto text-gray-500">
          {textContent.map(items => (
            <div>
              <h2>{items.heading}</h2>
              <p>{items.description}</p>
              <ul>
                {items.subdescription.map(item => (
                  <li>{item.text}</li>
                ))}
              </ul>
              {items.figureContent.map(item => (
                <figure>
                  <img className="w-full rounded-lg" src={item.image} alt="" />
                  <figcaption>{item.imageCaption}</figcaption>
                </figure>
              ))}
              {items.videoContent.map(item => (
                <Link
                  to={item.link}
                  className="text-sm font-medium text-emerald-400"
                >
                  {item.videoText}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TextTemplateSection

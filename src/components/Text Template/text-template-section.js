import * as React from "react"
import { RichText } from "prismic-reactjs"

const TextTemplateSection = ({
  sub_heading,
  heading,
  description,
  page_content,
}) => {
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
        <div className="text-lg max-w-default mx-auto px-4 sm:px-6 lg:px-8">
          <h1>
            <span className="block text-[16px] text-center text-emerald-600 font-semibold tracking-wide uppercase">
              {sub_heading}
            </span>
            <span className="mt-2 block text-[30px] text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-[36px]">
              {heading}
            </span>
          </h1>
          <p className="mt-8 text-[20px] text-gray-500 leading-8">
            {description}
          </p>
        </div>

        <div className="mt-6 text-lg max-w-default mx-auto px-4 sm:px-6 lg:px-8 text-gray-500">
          {page_content?.map((item, i) => {
            return (
              <div key={i}>
                {item?.heading1.text ? (
                  <h2 className="text-[30px] text-gray-900">
                    {item?.heading1.text}
                  </h2>
                ) : (
                  ""
                )}
                <div className="rich-text">
                  {item?.rich_text.richText ? (
                    <RichText render={item?.rich_text.richText} />
                  ) : (
                    ""
                  )}
                </div>
                {item?.blockquote.text ? (
                  <blockquote>
                    <p className="text-[18px]">{item?.blockquote.text}</p>
                  </blockquote>
                ) : (
                  ""
                )}
                {item?.image.url ? (
                  <figure>
                    <img
                      className="w-full rounded-lg"
                      src={item?.image.url}
                      alt=""
                    />
                    <figcaption>{item?.image_caption.text}</figcaption>
                  </figure>
                ) : (
                  ""
                )}
                {item?.video_link.url ? (
                  <div className="video relative pt-[60%]">
                    <iframe
                      className="w-full rounded-lg border-0 absolute top-0 left-0 h-[100%] w-full"
                      src={item?.video_link.url}
                      title={item?.video_title.text}
                      allow="accelerometer; gyroscope; autoplay; encrypted-media;
                  picture-in-picture;"
                      allowfullscreen
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TextTemplateSection

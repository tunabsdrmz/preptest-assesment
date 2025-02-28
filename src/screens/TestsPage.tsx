"use client";
import { BigCard } from "@/components/BigCard";
import { CollapsibleCard } from "@/components/CollapsibleCard";
import { SmallCard } from "@/components/SmallCard";
import { MockData1, MockData2, MockData3, MockData4 } from "@/mocks/MockData";
import React, { useState } from "react";

export default function TestsPage() {
  const [activatedCards, setActivatedCards] = useState<{ [key: string]: boolean }>({});

  const toggleActivation = (id: string) => {
    setActivatedCards((prevActivatedCards) => ({
      ...prevActivatedCards,
      [id]: !prevActivatedCards[id],
    }));
  };
  return (
    <div className="flex flex-col gap-3 cursor-default">
      <CollapsibleCard.Root>
        <CollapsibleCard.Title>NOTES: DATA ANALYSIS</CollapsibleCard.Title>
        <CollapsibleCard.Description>
          Lorem ipsum dolor sit amet consectetur. Proin fermentum pellentesque sed non.
          Mauris enim feugiat volutpat feugiat sed. Adipiscing amet malesuada a in neque
          pellentesque turpis suspendisse. Urna sed in ornare proin proin parturient
          tincidunt luctus nunc. Proin cras enim maecenas in tincidunt. Dui tristique
          lacus risus vitae adipiscing sagittis enim porttitor. A consequat ultricies
          aliquam ut arcu lorem. Est mus libero sit vel ac in at pulvinar. Orci ipsum sit
          egestas viverra egestas mauris nunc. Malesuada suspendisse sit quis nulla Lorem
          ipsum dolor sit amet consectetur. Proin fermentum pellentesque sed non. Mauris
          enim feugiat volutpat feugiat sed. Adipiscing amet malesuada a in neque
          pellentesque turpis suspendisse. Urna sed in ornare proin proin parturient
          tincidunt luctus nunc. Proin cras enim maecenas in tincidunt. Dui tristique
          lacus risus vitae adipiscing sagittis enim porttitor. A consequat ultricies
          aliquam ut arcu lorem. Est mus libero sit vel ac in at pulvinar. Orci ipsum sit
          egestas viverra egestas mauris nunc. Malesuada suspendisse sit quis nulla Lorem
          ipsum dolor sit amet consectetur. Proin fermentum pellentesque sed non. Mauris
          enim feugiat volutpat feugiat sed. Adipiscing amet malesuada a in neque
          pellentesque turpis suspendisse. Urna sed in ornare proin proin parturient
          tincidunt luctus nunc. Proin cras enim maecenas in tincidunt. Dui tristique
          lacus risus vitae adipiscing sagittis enim porttitor. A consequat ultricies
          aliquam ut arcu lorem. Est mus libero sit vel ac in at pulvinar. Orci ipsum sit
          egestas viverra egestas mauris nunc. Malesuada suspendisse sit quis nulla Lorem
          ipsum dolor sit amet consectetur. Proin fermentum pellentesque sed non. Mauris
          enim feugiat volutpat feugiat sed. Adipiscing amet malesuada a in neque
          pellentesque turpis suspendisse. Urna sed in ornare proin proin parturient
          tincidunt luctus nunc. Proin cras enim maecenas in tincidunt. Dui tristique
          lacus risus vitae adipiscing sagittis enim porttitor. A consequat ultricies
          aliquam ut arcu lorem. Est mus libero sit vel ac in at pulvinar. Orci ipsum sit
          egestas viverra egestas mauris nunc. Malesuada suspendisse sit quis nulla
        </CollapsibleCard.Description>
      </CollapsibleCard.Root>

      <SmallCard.Root variant="primary">
        <SmallCard.Title>NON-Generated Test</SmallCard.Title>
        <SmallCard.Description>
          These are tests specially prepared by our teachers.
        </SmallCard.Description>
      </SmallCard.Root>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3 w-full">
        {MockData1.map((item) => (
          <BigCard.Root
            key={item.id}
            isActivated={activatedCards[item.id]}>
            <BigCard.Title isActivated={activatedCards[item.id]}>
              {item.title}
            </BigCard.Title>
            <BigCard.Description>{item.description}</BigCard.Description>
            <BigCard.TopicCardContainer>
              {item.topics.map((topic, index) => (
                <BigCard.TopicCard
                  key={index}
                  topic={topic.topic}
                  count={topic.count}
                />
              ))}
            </BigCard.TopicCardContainer>
            <BigCard.Button onClick={() => toggleActivation(item.id)}>
              Start Test
            </BigCard.Button>
          </BigCard.Root>
        ))}
      </div>
      <SmallCard.Root variant="secondary">
        <SmallCard.Title>GENERATED TESTS</SmallCard.Title>
        <SmallCard.Description>
          These are tests automatically created by the system. In order to move on to this
          part, you need to solve non-generated tests.
        </SmallCard.Description>
      </SmallCard.Root>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3 w-full">
        {MockData2.map((item) => (
          <BigCard.Root
            key={item.id}
            isActivated={activatedCards[item.id]}>
            <BigCard.Title isActivated={activatedCards[item.id]}>
              {item.title}
            </BigCard.Title>
            <BigCard.Description>{item.description}</BigCard.Description>
            <BigCard.TopicCardContainer>
              {item.topics.map((topic, index) => (
                <BigCard.TopicCard
                  key={index}
                  topic={topic.topic}
                  count={topic.count}
                />
              ))}
            </BigCard.TopicCardContainer>
            <BigCard.Button onClick={() => toggleActivation(item.id)}>
              Start Test
            </BigCard.Button>
          </BigCard.Root>
        ))}
      </div>

      <SmallCard.Root variant="primary">
        <SmallCard.Title>NON-Generated Test</SmallCard.Title>
        <SmallCard.Description>
          These are tests specially prepared by our teachers.
        </SmallCard.Description>
      </SmallCard.Root>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3 w-full">
        {MockData3.map((item) => (
          <BigCard.Root
            key={item.id}
            isActivated={activatedCards[item.id]}>
            <BigCard.Title isActivated={activatedCards[item.id]}>
              {item.title}
            </BigCard.Title>
            <BigCard.Description>{item.description}</BigCard.Description>
            <BigCard.TopicCardContainer>
              {item.topics.map((topic, index) => (
                <BigCard.TopicCard
                  key={index}
                  topic={topic.topic}
                  count={topic.count}
                />
              ))}
            </BigCard.TopicCardContainer>
            <BigCard.Button onClick={() => toggleActivation(item.id)}>
              Start Test
            </BigCard.Button>
          </BigCard.Root>
        ))}
      </div>

      <SmallCard.Root variant="secondary">
        <SmallCard.Title>GENERATED TESTS</SmallCard.Title>
        <SmallCard.Description>
          These are tests automatically created by the system. In order to move on to this
          part, you need to solve non-generated tests.
        </SmallCard.Description>
      </SmallCard.Root>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3 w-full">
        {MockData4.map((item) => (
          <BigCard.Root
            key={item.id}
            isActivated={activatedCards[item.id]}>
            <BigCard.Title isActivated={activatedCards[item.id]}>
              {item.title}
            </BigCard.Title>
            <BigCard.Description>{item.description}</BigCard.Description>
            <BigCard.TopicCardContainer>
              {item.topics.map((topic, index) => (
                <BigCard.TopicCard
                  key={index}
                  topic={topic.topic}
                  count={topic.count}
                />
              ))}
            </BigCard.TopicCardContainer>
            <BigCard.Button onClick={() => toggleActivation(item.id)}>
              Start Test
            </BigCard.Button>
          </BigCard.Root>
        ))}
      </div>
    </div>
  );
}

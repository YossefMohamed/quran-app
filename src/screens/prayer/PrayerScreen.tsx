import React from "react";
import { ScrollView } from "react-native";
import images from "../../../assets/images";
import Card from "../../components/Card";
import PrayerTimeCard from "../../components/PrayerTimeCard";
import { Text } from "../../components/typography";
import { CardContainer, TextCenter } from "./Prayer.styles";

function PrayerScreen({ navigation }: any) {
  return (
    <ScrollView>
      <CardContainer>
        <Card image={images.evening}>
          <>
            <Text variant="caption" color="white">
              Next Pary
            </Text>
            <Text variant="header" color="white">
              Fajr
            </Text>
            <Text variant="header" color="white">
              04:30 am
            </Text>
            <Text variant="caption" color="white">
              1:30:50
            </Text>
          </>
        </Card>
      </CardContainer>
      <TextCenter variant="header">Today</TextCenter>

      <PrayerTimeCard />
      <PrayerTimeCard selected />
      <PrayerTimeCard />
      <PrayerTimeCard />
      <PrayerTimeCard />
    </ScrollView>
  );
}

export default PrayerScreen;

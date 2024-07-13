import { useState } from "react";
import { View, Text, Image } from "react-native"
import { MapPin, Calendar as IconCalendar, Settings2, UserRoundPlus, ArrowRight, Import } from "lucide-react-native";

import { colors } from "@/styles/colors"
import { Input } from "@/components/input"
import { Button } from "@/components/button"

enum StepForm {
  TRIP_DETAILS = 1,
  ADD_EMAIL = 2,
}

/**
 * essas coisas não querem funcionar
 * <Settings2 color={colors.zinc[200]} size={20} />
 * <ArrowRight color={colors.lime[200]} size={20} />
 * hehe.
 */
export default function Index() {
  const [currentStep, setCurrentStep] = useState(StepForm.TRIP_DETAILS)

  function handleNextStepForm() {
    if(currentStep === StepForm.TRIP_DETAILS) {
      return setCurrentStep(StepForm.ADD_EMAIL)
  }
}
  return (
    <View className="flex-1 items-center justify-center px-5">
      <Image
        source={require("@/assets/logo.png")}
        className="h-8"
        resizeMode="contain"
      />

      <Image 
        source={require("@/assets/bg.png")} className="absolute"/>

      <Text className="text-zinc-400 font-regular text-center text-lg mt-3">
        Convide seus amigos e planeje a sua{"\n"}próxima viagem
      </Text>

      <View className="w-full bg-zinc-900 p-4 rounded-xl my-8 border border-zinc-800">
        <Input>
          <MapPin color={colors.zinc[400]} size={20} />
          <Input.Field
            placeholder="Para onde?" editable={currentStep === StepForm.TRIP_DETAILS}
          />
        </Input>

        <Input>
          <IconCalendar color={colors.zinc[400]} size={20} />
          <Input.Field
            placeholder="Quando?" editable={currentStep === StepForm.TRIP_DETAILS}
          />
        </Input>

        {currentStep === StepForm.ADD_EMAIL && 
          <>
            <View className="border-b m-2 border-zinc-800 h-11 flex-row items-center justify-center rounded-lg gap-2 px-2 ">
              <Button 
              variant="secondary" 
              onPress={() => setCurrentStep(StepForm.TRIP_DETAILS)}
              >
              <Button.Title>Alterar local/data</Button.Title></Button>
            </View>

            <Input>
              <UserRoundPlus color={colors.zinc[400]} size={20} />
              <Input.Field
              placeholder="Quem estará na viagem?"
              />
            </Input>
          </>
        }

        <View className="border-b m-2 border-zinc-800 h-11 flex-row items-center justify-center rounded-lg gap-2 px-2 bg-lime-300">
        <Button onPress={handleNextStepForm}>
                <Button.Title>
                  { currentStep === StepForm.TRIP_DETAILS
                    ? "Continuar"
                    : "Confirmar viagem"
                  }
                  </Button.Title>
        </Button>
      </View>
    </View>

    <Text className="text-zinc-500 font-regular text-center text-base">
      Ao planejar sua viagem pela plann.er você automaticamente concorda com nossos{"\n"} 
       <Text className="text-zinc-300 underline">termos de uso e política de privacidade.</Text> 
      </Text>
  </View>
  )
}
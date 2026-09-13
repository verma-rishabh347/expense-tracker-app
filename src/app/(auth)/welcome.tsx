import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

export default function Welcome() {
    const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-black">

      <View className="flex-1 bg-black items-center">

        <View className="items-center mt-52">

          <Image
            className="h-60 w-60"
            source={require("../../../assets/authstart.png")}
          />

          <Text className="text-5xl text-center text-white">
            Take Control{"\n"}of
            <Text className="text-green-600">
              {" "}Your Money
            </Text>
          </Text>

        </View>

        <Pressable
          className="w-80 rounded-2xl bg-green-400 py-4 items-center mt-auto mb-8"
          onPress={() => router.push("/(auth)/signup")}
        >
          <Text className="text-lg font-bold text-black">
            Get Started →
          </Text>
        </Pressable>

        <View className="flex-row items-center mb-10">

          <Text className="text-white text-base">
            Already Have An Account ?
          </Text>

          <Pressable onPress={() => router.push("/(auth)/signin")}>
            <Text className="text-green-600 text-base">
              {" "}Sign In
            </Text>
          </Pressable>

        </View>

      </View>

    </SafeAreaView>
  )
}
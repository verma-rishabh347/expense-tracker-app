import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

export default function VerifyEmail() {
  return (
    <View className="flex-1 bg-[#080d0f] px-7 pt-10">

      {/* Email Icon */}
      <View className="items-center mt-2">
        <View className="h-28 w-28 rounded-full bg-[#062d1c] items-center justify-center">
          <Ionicons
            name="mail-outline"
            size={60}
            color="#45df85"
          />
        </View>
      </View>

      {/* Heading */}
      <Text className="text-4xl font-bold text-white text-center mt-8">
        Check Your Email
      </Text>

      <Text className="text-lg text-gray-400 text-center mt-4 leading-7">
        We've sent a 6-digit code to{'\n'}
        rishabb@example.com
      </Text>

      {/* OTP - Only One Box */}
      <View className="items-center mt-6">
        <TextInput
          className="h-16 w-40  border-2 border-green-500 rounded-2xl text-white text-3xl text-center"
          keyboardType="number-pad"
          maxLength={6}
          autoFocus
        />
      </View>

      {/* Resend */}
      <View className="flex-row justify-center mt-5">
        <Text className="text-lg text-gray-400">
          Didn't receive the code?
        </Text>

        <Pressable>
          <Text className="text-lg text-green-500 font-semibold">
            {' '}Resend (00:30)
          </Text>
        </Pressable>
      </View>

      {/* Verify Button */}
      <Pressable
        className="h-16 rounded-2xl bg-green-400 mt-10 items-center justify-center"
        onPress={() => router.replace("/(tabs)")}
      >
        <Text className="text-xl font-bold text-black">
          Verify
        </Text>
      </Pressable>

    </View>
  )
}
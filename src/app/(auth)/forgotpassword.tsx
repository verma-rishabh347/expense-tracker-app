import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

export default function ForgotPassword() {
  return (
    <View className="flex-1 bg-[#080d0f] px-7 pt-14">

      {/* Lock Icon */}
      <View className="items-center mt-4">
        <View className="h-28 w-28 rounded-full bg-[#062d1c] items-center justify-center">
          <Ionicons
            name="lock-open-outline"
            size={58}
            color="#45df85"
          />
        </View>
      </View>

      {/* Heading */}
      <Text className="text-4xl font-bold text-white text-center mt-10">
        Forgot Password?
      </Text>

      <Text className="text-lg text-gray-400 text-center mt-4 leading-7">
        No worries! Enter your email address{'\n'}
        and we'll send you a reset link.
      </Text>

      {/* Email */}
      <View className="h-20 border border-gray-700 rounded-2xl mt-10 flex-row items-center px-6">

        <Ionicons
          name="mail-outline"
          size={30}
          color="white"
        />

        <TextInput
          className="flex-1 ml-5 text-white text-lg"
          placeholder="Email Address"
          placeholderTextColor="#8b8f91"
          keyboardType="email-address"
          autoCapitalize="none"
        />

      </View>

      {/* Send Reset Link */}
      <Pressable
      onPress={() => router.push("/(auth)/verifyemail")}
        className="h-20 rounded-2xl bg-green-400 mt-10 items-center justify-center"
        
      >
        <Text className="text-xl font-bold text-black">
          Send Reset Link
        </Text>
      </Pressable>

    </View>
  )
}
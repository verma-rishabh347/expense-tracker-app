import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

export default function Signup() {
  return (
    <View className="flex-1 bg-black px-7 pt-8">

      {/* Heading */}
      <Text className="text-4xl font-bold text-white">
        Create Account
      </Text>

      <Text className="text-lg text-gray-400 mt-3">
        Sign up to get started with your account.
      </Text>

      {/* Name */}
      <View className="h-16 border border-gray-700 rounded-2xl mt-14 flex-row items-center px-5">

        <Ionicons
          name="person-outline"
          size={24}
          color="white"
        />

        <TextInput
          className="flex-1 ml-5 text-white text-lg"
          placeholder="Full Name"
          placeholderTextColor="#8b8f91"
        />

      </View>

      {/* Email */}
      <View className="h-16 border border-gray-700 rounded-2xl mt-4 flex-row items-center px-5">

        <Ionicons
          name="mail-outline"
          size={24}
          color="white"
        />

        <TextInput
          className="flex-1 ml-5 text-white text-lg"
          placeholder="Email Address"
          placeholderTextColor="#8b8f91"
          keyboardType="email-address"
        />

      </View>

      {/* Password */}
      <View className="h-16 border border-gray-700 rounded-2xl mt-4 flex-row items-center px-5">

        <Ionicons
          name="lock-closed-outline"
          size={24}
          color="white"
        />

        <TextInput
          className="flex-1 ml-5 text-white text-lg"
          placeholder="Password"
          placeholderTextColor="#8b8f91"
          secureTextEntry
        />

        <Ionicons
          name="eye-off-outline"
          size={24}
          color="white"
        />

      </View>

      {/* Confirm Password */}
      <View className="h-16 border border-gray-700 rounded-2xl mt-4 flex-row items-center px-5">

        <Ionicons
          name="lock-closed-outline"
          size={24}
          color="white"
        />

        <TextInput
          className="flex-1 ml-5 text-white text-lg"
          placeholder="Confirm Password"
          placeholderTextColor="#8b8f91"
          secureTextEntry
        />

        <Ionicons
          name="eye-off-outline"
          size={24}
          color="white"
        />

      </View>

      {/* Sign Up Button */}
      <Pressable
        className="h-20 rounded-2xl bg-green-400 mt-14 items-center justify-center"
        onPress={() => router.push("/(auth)/verifyemail")}
      >
        <Text className="text-xl font-bold text-black">
          Sign Up
        </Text>
      </Pressable>

      {/* Sign In */}
      <View className="flex-row items-center justify-center mt-20">

        <Text className="text-white text-base">
          Already Have An Account ?
        </Text>

        <Pressable
          onPress={() => router.push('/(auth)/signin')}
        >
          <Text className="text-green-500 text-base font-semibold">
            {' '}Sign In
          </Text>
        </Pressable>

      </View>

    </View>
  )
}
import {
  View,
  Text,
  TextInput,
  Pressable,
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

export default function Signin() {
  return (
    <SafeAreaView className="flex-1 bg-[#080d0f]">
      <View className="flex-1 px-7 pt-8">

        {/* Heading */}
        <Text className="text-4xl font-bold text-white">
          Welcome Back
        </Text>

        <Text className="text-lg text-gray-400 mt-3">
          Sign in to continue to your account.
        </Text>

        {/* Email */}
        <View className="h-16 border border-gray-700 rounded-2xl mt-20 flex-row items-center px-6">
          <Ionicons
            name="mail-outline"
            size={24}
            color="white"
            className='mt-3'
          />

          <TextInput
            className="flex-1 ml-5 text-white text-lg"
            placeholder="Email Address"
            placeholderTextColor="#8b8f91"
            keyboardType="email-address"
          />
        </View>

        {/* Password */}
        <View className="h-16 border border-gray-700 rounded-2xl mt-4 flex-row items-center px-6">
          <Ionicons
            name="lock-closed-outline"
            size={24}
            color="white"
            className='mt-1'
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

        {/* Forgot Password */}
        <Pressable onPress={()=>router.push("/(auth)/forgotpassword")} className="self-end mt-3">
          <Text className="text-green-500 text-lg font-semibold">
            Forgot Password?
          </Text>
        </Pressable>

        {/* Sign In Button */}
        <Pressable
          className="h-20 rounded-2xl bg-green-400 mt-40 items-center justify-center"
          onPress={() => router.replace("/(tabs)")}
        >
          <Text className="text-xl font-bold text-black">
            Sign In
          </Text>
        </Pressable>

         <View className="flex-row items-center text-center m-auto   mt-10">
        
                  <Text className="text-white text-base">
                    Already Have An Account ?
                  </Text>
        
                  <Pressable onPress={() => router.push("/(auth)/signup")}>
                    <Text className="text-green-600 text-base">
                      {" "}Sign Up
                    </Text>
                  </Pressable>
        
                </View>

      </View>
    </SafeAreaView>
  )
}
import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function About() {
  return (
    <View className="flex-1 bg-black">

      <SafeAreaView className="flex-1">

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
        >

          {/* Header */}

          <View className="px-5 mt-5">

            <Text className="text-white text-4xl font-bold">
              About App
            </Text>

            <Text className="text-gray-400 text-lg mt-1">
              Everything about your finance app
            </Text>

          </View>


          {/* App Logo */}

          <View className="items-center mt-10">

            <View className="w-24 h-24 rounded-3xl bg-green-500 items-center justify-center">

              <Ionicons
                name="wallet"
                size={50}
                color="black"
              />

            </View>

            <Text className="text-white text-2xl font-bold mt-5">
              Expense Tracker
            </Text>

            <Text className="text-gray-500 mt-2">
              Version 1.0.0
            </Text>

          </View>


          {/* About */}

          <View className="mx-5 mt-10 bg-gray-950 border border-gray-800 rounded-2xl p-5">

            <Text className="text-white text-xl font-bold">
              About Expense Tracker
            </Text>

            <Text className="text-gray-400 text-base leading-6 mt-4">
              Expense Tracker helps you manage your income,
              expenses and overall financial activity in one place.
            </Text>

            <Text className="text-gray-400 text-base leading-6 mt-3">
              Track your spending, understand your financial
              habits and keep your money organized.
            </Text>

          </View>


          {/* Features */}

          <View className="mx-5 mt-5 bg-gray-950 border border-gray-800 rounded-2xl p-5">

            <Text className="text-white text-xl font-bold mb-4">
              Features
            </Text>


            <View className="flex-row items-center py-3">

              <Ionicons
                name="add-circle-outline"
                size={25}
                color="#22c55e"
              />

              <Text className="text-gray-300 text-base ml-4">
                Track income and expenses
              </Text>

            </View>


            <View className="flex-row items-center py-3">

              <Ionicons
                name="pie-chart-outline"
                size={25}
                color="#22c55e"
              />

              <Text className="text-gray-300 text-base ml-4">
                View financial reports
              </Text>

            </View>


            <View className="flex-row items-center py-3">

              <Ionicons
                name="stats-chart-outline"
                size={25}
                color="#22c55e"
              />

              <Text className="text-gray-300 text-base ml-4">
                Analyze spending habits
              </Text>

            </View>


            <View className="flex-row items-center py-3">

              <Ionicons
                name="shield-checkmark-outline"
                size={25}
                color="#22c55e"
              />

              <Text className="text-gray-300 text-base ml-4">
                Secure financial data
              </Text>

            </View>

          </View>


          {/* App Information */}

          <View className="mx-5 mt-5 bg-gray-950 border border-gray-800 rounded-2xl">

            <View className="px-5 py-4 border-b border-gray-800">

              <Text className="text-gray-500 text-sm">
                APP VERSION
              </Text>

              <Text className="text-white text-base mt-1">
                1.0.0
              </Text>

            </View>


            <View className="px-5 py-4 border-b border-gray-800">

              <Text className="text-gray-500 text-sm">
                PLATFORM
              </Text>

              <Text className="text-white text-base mt-1">
                React Native
              </Text>

            </View>


            <View className="px-5 py-4">

              <Text className="text-gray-500 text-sm">
                BUILD
              </Text>

              <Text className="text-white text-base mt-1">
                2025.09
              </Text>

            </View>

          </View>


          {/* Footer */}

          <View className="items-center mt-10">

            <Text className="text-gray-500">
              Made with ❤️ using React Native
            </Text>

            <Text className="text-gray-600 text-sm mt-2">
              © 2025 Expense Tracker
            </Text>

          </View>

        </ScrollView>

      </SafeAreaView>

    </View>
  )
}
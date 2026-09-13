import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

const categories = [
  {
    title: 'Salary',
    icon: 'briefcase',
  },
  {
    title: 'Freelance',
    icon: 'laptop-outline',
  },
  {
    title: 'Business',
    icon: 'bar-chart-outline',
  },
  {
    title: 'Investments',
    icon: 'trending-up-outline',
  },
  {
    title: 'Gift',
    icon: 'gift-outline',
  },
  {
    title: 'Other',
    icon: 'ellipsis-horizontal',
  },
] as const

export default function AddIncome() {
  const [selectedCategory, setSelectedCategory] = useState('Salary')

  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="flex-1">

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
          className="px-5"
        >

          {/* Header */}
          <View className="flex-row items-center justify-between mt-2">

            <Pressable onPress={() => router.back()}>
              <Ionicons
                name="arrow-back"
                size={28}
                color="white"
              />
            </Pressable>

            <Text className="text-white text-xl font-bold">
              Add Income
            </Text>

            <Pressable className="h-12 w-12 rounded-2xl border border-gray-800 items-center justify-center">
              <Ionicons
                name="document-text-outline"
                size={26}
                color="white"
              />
            </Pressable>

          </View>

          {/* Income Icon */}
          <View className="items-center mt-5">

            <View className="h-24 w-24 rounded-full bg-green-950 border border-green-500 items-center justify-center">
              <Ionicons
                name="wallet"
                size={45}
                color="#22c55e"
              />
            </View>

            <Text className="text-white text-3xl font-bold mt-4">
              Add Income
            </Text>

            <Text className="text-gray-400 text-base mt-1">
              Track your earnings and growth
            </Text>

          </View>

          {/* Amount */}
          <View className="h-24 rounded-2xl border border-gray-800 bg-gray-950 mt-7 px-5 justify-center">

            <Text className="text-gray-400 text-sm">
              Amount
            </Text>

            <View className="flex-row items-center mt-1">

              <Text className="text-white text-3xl">
                ₹
              </Text>

              <TextInput
                className="flex-1 text-gray-500 text-3xl ml-4"
                placeholder="0.00"
                placeholderTextColor="#596168"
                keyboardType="decimal-pad"
              />

            </View>

          </View>

          {/* Description */}
          <View className="h-24 rounded-2xl border border-gray-800 bg-gray-950 mt-4 px-5 justify-center">

            <Text className="text-gray-400 text-sm">
              Description
            </Text>

            <View className="flex-row items-center mt-1">

              <Ionicons
                name="pencil-outline"
                size={26}
                color="white"
              />

              <TextInput
                className="flex-1 text-white text-base ml-5"
                placeholder="What's the source of income?"
                placeholderTextColor="#858b91"
              />

            </View>

          </View>

          {/* Category Heading */}
          <Text className="text-white text-lg font-bold mt-6">
            Select Category
          </Text>

          {/* Categories */}
          <View className="flex-row flex-wrap justify-between mt-4">

            {categories.map((item) => {

              const selected = selectedCategory === item.title

              return (
                <Pressable
                  key={item.title}
                  onPress={() => setSelectedCategory(item.title)}
                  className={`
                    w-[31.5%]
                    h-24
                    rounded-2xl
                    border
                    items-center
                    justify-center
                    mb-3
                    ${selected
                      ? 'border-green-400 bg-green-950'
                      : 'border-gray-800 bg-gray-950'
                    }
                  `}
                >

                  <Ionicons
                    name={item.icon}
                    size={30}
                    color={selected ? '#22c55e' : 'white'}
                  />

                  <Text
                    className={`
                      text-sm mt-2
                      ${selected ? 'text-white' : 'text-gray-300'}
                    `}
                  >
                    {item.title}
                  </Text>

                </Pressable>
              )
            })}

          </View>

          {/* Date */}
          <Pressable className="h-20 rounded-2xl border border-gray-800 bg-gray-950 px-5 mt-2 justify-center">

            <Text className="text-gray-400 text-sm">
              Date
            </Text>

            <View className="flex-row items-center mt-1">

              <Ionicons
                name="calendar-outline"
                size={25}
                color="white"
              />

              <Text className="text-white text-base ml-5">
                13 September 2025
              </Text>

              <Ionicons
                name="chevron-forward"
                size={24}
                color="#858b91"
                style={{ marginLeft: 'auto' }}
              />

            </View>

          </Pressable>

          {/* Add Income Button */}
          <Pressable
            className="h-16 rounded-2xl bg-green-400 items-center justify-center mt-7"
            onPress={() => console.log('Add Income')}
          >
            <Text className="text-black text-xl font-bold">
              Add Income
            </Text>
          </Pressable>

        </ScrollView>

      </SafeAreaView>
    </View>
  )
}